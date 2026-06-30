# Elevator Saga Study Guide & Template

Welcome! Below is a simple, easy-to-understand explanation of how the provided elevator solution works, followed by a step-by-step study template you can use to build your own solver.

---

## 🧸 ELI5: How the Solution Works

Imagine you are in a building with a few elevators. Instead of having the elevators run around randomly like hyperactive puppies every time a button is pressed, this solution turns them into **trained shuttle buses**. 

Here is the secret:

### 1. The Shuttle Rule (Always go to the ends)
An elevator only has two modes: **"Going Up"** or **"Going Down"**.
* If it is going **Up**, its next target is always the **very top floor**.
* If it is going **Down**, its next target is always the **bottom floor (0)**.
* It will keep moving in that direction unless it decides to stop or turn around early.

### 2. The Stoplight Rules (When to stop on the way)
As the elevator passes by a floor, it looks out the window and asks:
1. **Did someone inside press this floor's button?** (They want to get off!) $\rightarrow$ **STOP**.
2. **Is the elevator completely full?** $\rightarrow$ **PASS** (sorry, no room!).
3. **Is someone waiting on this floor who wants to go the SAME direction as me?** (e.g., I'm going Up, and they pressed "Up") $\rightarrow$ **STOP** (let them in!).
4. **Is anyone else waiting further ahead in my direction, or does someone inside want to go further?** $\rightarrow$ **PASS** (we must keep going forward).
5. **Is someone waiting here who wants to go the OPPOSITE direction, and we don't need to go any further?** $\rightarrow$ **STOP** (let them in, and we will turn around now).

### 3. The Turn-Around Rules (When to switch directions)
When the elevator stops at a floor, it decides which way to go next:
* If it's at the **very bottom**, it must go **Up**.
* If it's at the **very top**, it must go **Down**.
* If it has passengers inside who want to keep going the same way, it keeps going the **same way**.
* If there is anyone waiting further ahead in its direction, it keeps going the **same way**.
* Otherwise, it **turns around** and heads the other way!

---

## 🛠️ Step-by-Step Study Template

To build this yourself, don't try to code the entire system at once! Start simple and add logic piece by piece. Below is a code template you can copy into the Elevator Saga editor.

### Progressive Milestones to Solve:
1. **Milestone 1: The Simple Shuttle.** Make elevators go up to the top floor and down to the bottom floor, stopping only when a passenger inside presses a button.
2. **Milestone 2: Picking Up Passengers.** Make elevators stop at floors where people are waiting to go in the *same* direction.
3. **Milestone 3: Smart Turnarounds.** Make elevators turn around early if there is no one left to pick up or drop off in their current direction.
4. **Milestone 4: Coordination.** Prevent two elevators from stopping at the exact same floor to pick up the same passenger.

### JavaScript Skeleton Template

```javascript
{
    init: function(elevators, floors) {
        // --- 1. CONSTANTS & STATE ---
        const UP = 0;
        const DOWN = 1;
        const TOP_FLOOR = Math.max(...floors.map(f => f.floorNum()));

        // Keep track of which floors have people waiting to go UP or DOWN
        // Hint: Use Sets to avoid duplicate floor numbers!
        let waiting = [new Set(), new Set()]; 

        // --- 2. FLOOR EVENT LISTENERS ---
        floors.forEach(floor => {
            floor.on('up_button_pressed', () => {
                const floorNum = floor.floorNum();
                // TODO: Record that someone is waiting to go UP at this floor
                // Hint: waiting[UP].add(floorNum)
            });

            floor.on('down_button_pressed', () => {
                const floorNum = floor.floorNum();
                // TODO: Record that someone is waiting to go DOWN at this floor
            });
        });

        // --- 3. ELEVATOR EVENT LISTENERS ---
        elevators.forEach(elevator => {
            // Keep track of which floors passengers INSIDE this elevator want to go to
            elevator.stops = new Set();

            elevator.on('floor_button_pressed', floorNum => {
                // TODO: Record that a passenger inside wants to stop at floorNum
                // Hint: elevator.stops.add(floorNum)
            });

            elevator.on('passing_floor', (floorNum, directionStr) => {
                // This event fires just before the elevator passes a floor.
                // TODO: Decide whether to STOP at floorNum or PASS it.
                //
                // Hint: Call a helper function like decideAction(elevator, floorNum)
                // If it returns 'STOP':
                //     elevator.goToFloor(floorNum, true); // Stop immediately!
                //     updateDirection(elevator, floorNum);
            });

            elevator.on('stopped_at_floor', floorNum => {
                // The elevator has landed on a floor.
                // TODO: Clear this floor from passenger stops and waiting lists,
                // and decide which way the elevator should head next.
                //
                // Hint: Call updateDirection(elevator, floorNum)
                // Then call applyDirection(elevator) to set the indicators and move.
            });
        });

        // --- 4. HELPER FUNCTIONS TO IMPLEMENT ---

        // Decide if the elevator should stop at a passing floor
        function decideAction(elevator, floorNum) {
            // Rule A: Does a passenger inside want to get off here?
            // Rule B: Is the elevator full? (loadFactor >= 1.0)
            // Rule C: Is someone waiting here to go in our direction?
            // Rule D: Are we needed further along this path?
            
            // TODO: Return 'STOP' or 'PASS'
            return 'PASS'; 
        }

        // Set the elevator's target direction
        function updateDirection(elevator, floorNum) {
            // Clear this floor from stops
            elevator.stops.delete(floorNum);

            // TODO: Determine the next direction (UP or DOWN)
            // If floorNum === 0 -> UP
            // If floorNum === TOP_FLOOR -> DOWN
            // If elevator.stops.size > 0 -> Keep current direction
            // If no one is waiting or traveling further ahead -> Turn around!
            
            // Remember to clear the waiting queue for this floor:
            // waiting[elevator.direction].delete(floorNum);
        }

        // Apply indicators and dispatch elevator to its ultimate destination
        function applyDirection(elevator) {
            const isUp = (elevator.direction === UP);
            elevator.goingUpIndicator(isUp);
            elevator.goingDownIndicator(!isUp);

            // Send to the end of the line
            const destination = isUp ? TOP_FLOOR : 0;
            elevator.destinationQueue = [destination];
            elevator.checkDestinationQueue();
        }

        // Check if there are people waiting or stops requested further ahead
        function isNeededBeyondFloor(elevator, floorNum) {
            // TODO: Check if there's any wait request or passenger destination
            // in the elevator's current direction beyond floorNum.
            return false;
        }
    },

    update: function(dt, elevators, floors) {
        // Not needed for this event-driven solution!
    }
}
```

---

## 💡 Pro-Tips for Success

1. **Test Incrementally**: Copy the skeleton template first, fill in **Milestone 1** (just going up and down to stop for inside passengers), and make sure it runs without crashing.
2. **Use `console.log`**: If an elevator gets stuck or behaves weirdly, use `console.log("Elevator direction:", elevator.direction)` to debug inside the browser console.
3. **Watch the Indicators**: Setting `goingUpIndicator` and `goingDownIndicator` correctly is *crucial* because passengers at the floor will only enter the elevator if its indicator matches the direction they want to go.
