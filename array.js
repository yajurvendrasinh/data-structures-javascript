/*ARRAY in Javascript*/
	/*Initializing an array is very simple in Javascript
	 * one can intialize array using array notation '[]'
	 * arrays in Javascript are dynamic in nature
	 * Javascript provides various methods to manipulate arrays.
	 * everything in javascript is object, even Arrays are objects - specialized objects with indices
	*/

var firstArray = [];
firstArray.push('Y');
firstArray.push('A');
firstArray.push('J');
firstArray.push('U');
firstArray.push('R');

console.log(firstArray); // logs out '['Y','A','J','U','R']'

// declaring an array using Array Constructor

var newArray = new Array(1,2,3,4,5);
var moreNewArray = new Array(10) // 10 shows the size/ length of the array

// methods which can be used with arrays

var statement = "this is an example for split"
var wordsArray = statement.split(" "); // resultant will be a words array -> ["this", "is", "an", "example", "for", "split"]

// Simple Copy and Deep Copy

var arrayOne = [1,2,3,4];
var arrayTwo = arrayOne; // makes a simple copy - i.e. arrayTwo is just a reference to arrayOne, if arrayOne changes so does arrayTwo
var arrThree = [];

for(var i in arrayOne) {
	arrayThree[i] = arrayOne[i];
}

// the above for loop will create deep copy of arrayOne i.e. changes in arrayOne wont affect arrayThree

//lets move on to some advanced stuff


/* MultiDimensional Arrays in JavaScript */

Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for (var i = 0; i < numrows; ++i) {
		var columns = [];
		for (var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5,5,0);

//OR

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]]; // pretty simple

