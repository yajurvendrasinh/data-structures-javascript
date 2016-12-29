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
