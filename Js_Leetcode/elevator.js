{
    /**
     * The init function is called when the challenge starts.
     * It sets up the events, state, and policies for all elevators and floors.
     * 
     * @param {Array} elevators - Array of elevator objects provided by the game.
     * @param {Array} floors - Array of floor objects provided by the game.
     */
    init: function(elevators, floors) {

        // ==========================================
        // 1. CONSTANTS & SYSTEM STATE
        // ==========================================

        // Directions represent indexes into our waiting sets.
        // We use numbers instead of booleans/strings for performance and clean array access.
        const UP = 0;
        const DOWN = 1;

        // Decisive actions for the stopping policy during passing_floor events.
        const PASS = 0; // Skip the floor entirely
        const STOP = 1; // Stop at the floor to let people off/on
        const TURN = 2; // Immediately turn around without passing/stopping

        // Calculate the highest floor number.
        // We use Math.max rather than floors.length to avoid assuming floors are consecutive 0-indexed.
        const TOP_FLOOR = Math.max(...floors.map(floor => floor.floorNum()));

        // Keep track of which floors have passengers waiting to go UP or DOWN.
        // waiting[UP] is a Set containing floor numbers where UP was pressed.
        // waiting[DOWN] is a Set containing floor numbers where DOWN was pressed.
        let waiting = [new Set(), new Set()];


        // ==========================================
        // 2. EVENT LISTENERS SETUP
        // ==========================================

        // Listen to floor buttons. When a button is pressed, record that someone is waiting at that floor.
        floors.forEach(floor => {
            const floorNum = floor.floorNum();
            floor.on('up_button_pressed', () => setWaiting(floorNum, UP));
            floor.on('down_button_pressed', () => setWaiting(floorNum, DOWN));
        });

        // Initialize and bind event listeners to each elevator.
        elevators.forEach(elevator => {
            // Keep track of floor buttons pressed INSIDE this specific elevator (destinations requested by passengers).
            // We use a Set to avoid duplicates and allow O(1) checks.
            elevator.stops = new Set();

            // Track passengers selecting their destination floor from inside the elevator.
            elevator.on('floor_button_pressed', floorNum => elevator.stops.add(floorNum));

            // Fired as the elevator is about to pass a floor. 
            // This is where we decide whether to stop or bypass a floor dynamically.
            elevator.on('passing_floor', floorNum => handleApproach(elevator, floorNum));

            // Fired when the elevator actually comes to a halt at a floor.
            elevator.on('stopped_at_floor', floorNum => handleStop(elevator, floorNum));
        });


        // ==========================================
        // 3. EVENT HANDLERS (THE BUSINESS LOGIC)
        // ==========================================

        /**
         * Triggered when someone presses a button on a floor.
         * Stores the floor in the waiting sets and handles launching idle elevators.
         * 
         * @param {number} floorNum - The floor number where the button was pressed.
         * @param {number} direction - UP (0) or DOWN (1).
         */
        function setWaiting(floorNum, direction) {
            waiting[direction].add(floorNum);

            // Starting Policy: If someone is waiting on a floor higher than 0,
            // and we have an idle elevator at floor 0, get it moving!
            if (floorNum === 0) {
                return;
            }

            // Find an elevator that currently has no assigned direction (idle)
            let idleElevator = elevators.find(elevator => (elevator.direction === undefined));
            if (idleElevator) {
                // Manually trigger handleStop for the idle elevator at floor 0 to start it going up
                handleStop(idleElevator, 0);
            }
        }

        /**
         * Clears a floor from the waiting list for a specific direction.
         */
        function clearWaiting(floorNum, direction) {
            waiting[direction].delete(floorNum);
        }

        /**
         * Checks if there is anyone currently waiting at a floor to go in a direction.
         */
        function hasWaiting(floorNum, direction) {
            return waiting[direction].has(floorNum);
        }

        /**
         * Checks if there are people waiting above a specific floor to go UP.
         */
        function hasWaitingAbove(floorNum, direction) {
            return Math.max(...waiting[direction]) > floorNum;
        }

        /**
         * Checks if there are people waiting past the elevator's current position,
         * relative to the direction it is traveling.
         */
        function hasWaitingPast(floorNum, direction) {
            if (direction === UP) {
                // If heading UP, check if any wait request exists on a higher floor
                return Math.max(...waiting[UP], ...waiting[DOWN]) > floorNum;
            } else {
                // If heading DOWN, check if any wait request exists on a lower floor
                return Math.min(...waiting[UP], ...waiting[DOWN]) < floorNum;
            }
        }

        /**
         * Handles the logic when an elevator is approaching a floor.
         * Calls the stopping policy to get the correct action (STOP, PASS, or TURN).
         */
        function handleApproach(elevator, floorNum) {
            switch (getAction(elevator, floorNum)) {
                case STOP:
                    // Stop at this floor immediately by placing it at the front of the queue
                    elevator.goToFloor(floorNum, true);
                    // Decide where the elevator will head after stopping
                    updateDirection(elevator, floorNum);
                    break;

                case TURN:
                    // Change directions early without stopping at this floor
                    elevator.direction = getOppositeDirection(elevator);
                    applyDirection(elevator);
                    break;
            }
        }

        /**
         * Stopping Policy: Determines whether the approaching elevator should
         * stop, pass, or immediately turn.
         * 
         * @param {Object} elevator - The elevator object.
         * @param {number} floorNum - The floor being approached.
         * @returns {number} PASS, STOP, or TURN.
         */
        function getAction(elevator, floorNum) {
            // 1. If a passenger inside the elevator requested this floor, we MUST stop.
            if (elevator.stops.has(floorNum)) {
                return STOP;
            }

            // 2. If the elevator is full (or practically full, meaning < 1 person capacity left),
            // bypass the floor to avoid picking up new passengers.
            if (elevator.maxPassengerCount() * (1 - elevator.loadFactor()) < 1) {
                return PASS;
            }

            // 3. If someone is waiting at this floor to travel in our current direction,
            // and no other elevator has already committed to stopping here in that direction, stop.
            if (hasWaiting(floorNum, elevator.direction) && !isStop(floorNum, elevator.direction)) {
                return STOP;
            }

            // 4. If we have remaining drop-offs inside or we are still needed further along our current direction,
            // we must continue passing floors.
            if (elevator.stops.size > 0 || isNeededBeyondFloor(elevator, floorNum)) {
                return PASS;
            }

            // 5. If we aren't needed further ahead, check if someone is waiting at this floor
            // to go in the opposite direction. If so, stop here, let them in, and then turn.
            if (hasWaiting(floorNum, getOppositeDirection(elevator)) && !isStop(floorNum, getOppositeDirection(elevator))) {
                return STOP;
            }

            // 6. If no one needs this floor, no one inside wants off, and we aren't needed beyond it,
            // turn around immediately.
            return TURN;
        }

        /**
         * Checks if another elevator traveling in the same direction is already
         * scheduled to stop at the given floor. This prevents redundancy.
         */
        function isStop(floorNum, direction) {
            return elevators.some(
                other => other.direction === direction && other.stops.has(floorNum)
            );
        }

        /**
         * Handles the logic when the elevator halts at a floor.
         */
        function handleStop(elevator, floorNum) {
            // Top and bottom floors don't trigger 'passing_floor' events.
            // So we must handle their direction change logic here upon arrival.
            if (floorNum === 0 || floorNum === TOP_FLOOR) {
                updateDirection(elevator, floorNum);
            }

            // Apply the updated direction indicators and dispatch the elevator
            applyDirection(elevator);
        }

        /**
         * Turning Policy: Determines which way the elevator will travel after completing a stop.
         */
        function updateDirection(elevator, floorNum) {
            // The elevator has successfully stopped here; remove this floor from its passengers' requests
            elevator.stops.delete(floorNum);

            if (floorNum === 0) {
                // At the very bottom floor, the only way is UP
                elevator.direction = UP;
            } else if (floorNum === TOP_FLOOR) {
                // At the very top floor, the only way is DOWN
                elevator.direction = DOWN;
            } else if (elevator.stops.size > 0) {
                // Passengers inside still have destinations in our current direction, keep going
            } else if (hasWaiting(floorNum, elevator.direction)) {
                // People at this floor want to travel in our current direction, keep going
            } else if (!isNeededBeyondFloor(elevator, floorNum)) {
                // No one needs us further ahead; turn around early
                elevator.direction = getOppositeDirection(elevator);
            }

            // Clear the floor wait list in the elevator's chosen direction,
            // signaling to other elevators that this passenger request is handled.
            clearWaiting(floorNum, elevator.direction);
        }

        /**
         * Checks if the elevator is needed beyond the current floor in its current direction.
         * This handles complex coordination to prevent elevators from going to empty top/bottom floors.
         */
        function isNeededBeyondFloor(elevator, floorNum) {
            // If no one is waiting past this floor at all, we are not needed.
            if (!hasWaitingPast(floorNum, elevator.direction)) {
                return false;
            }

            // If we are going down, keep going down (usually towards high-density ground floor).
            if (elevator.direction === DOWN) {
                return true;
            }

            // If anyone is waiting above to go UP, we are needed.
            if (hasWaitingAbove(floorNum, UP)) {
                return true;
            }

            // Coordination: If another elevator heading UP is already higher than us,
            // let them handle the upper floors, we don't need to head up further.
            if (getHighestElevator(UP) !== elevator) {
                return false;
            }

            // Coordinate with downwards elevators so we don't duplicate efforts.
            let highestDownElevator = getHighestElevator(DOWN);
            if (highestDownElevator && !hasWaitingAbove(highestDownElevator.currentFloor() - 1, DOWN)) {
                return false;
            }

            return true;
        }

        /**
         * Returns the highest elevator traveling in the specified direction.
         * Used for elevator coordination.
         */
        function getHighestElevator(direction) {
            let highest = null;
            let highestFloor = -1;

            elevators.forEach(elevator => {
                if (elevator.direction === direction && elevator.currentFloor() > highestFloor) {
                    highest = elevator;
                    highestFloor = elevator.currentFloor();
                }
            });

            return highest;
        }

        /**
         * Updates direction indicators (goingUp/goingDown lights) and sets the ultimate
         * destination queue target (either the top floor or floor 0).
         */
        function applyDirection(elevator) {
            // Set the arrow indicator lights on the elevator so passengers on the floor know whether to board.
            elevator.goingUpIndicator(elevator.direction === UP);
            elevator.goingDownIndicator(elevator.direction === DOWN);

            // Send the elevator towards the opposite end of the building (shuttle style).
            elevator.destinationQueue = [(elevator.direction === UP ? TOP_FLOOR : 0)];
            elevator.checkDestinationQueue();
        }

        /**
         * Returns the opposite direction code (UP -> DOWN, or DOWN -> UP).
         */
        function getOppositeDirection(elevator) {
            return (elevator.direction === UP ? DOWN : UP);
        }

    },

    /**
     * The update function is called by the game loop.
     * We leave this blank since our solution is entirely event-driven.
     */
    update: function(dt, elevators, floors) {
    }
}
