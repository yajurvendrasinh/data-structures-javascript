/* Making Dictionary using arrays
 * Dictionary is a Key-Value pair Data Structure.
 * An object in Javascript is impolemented as a key-value pair, but object in its raw form cannot be sorted in Javascript
 * everything in Javascript is an Object, hence making a dictionary with functionality of sort, arrays can be use
 * as after all array is an object too in javascript
 */

 function Dictionay() {
 	this.datastore = new Array();
 	this.add = add;
 	this.find = find;
 	this.remove = remove;
 	this.showAll = showAll;
 }

 function add(key, value) {
 	this.datastore[key] = value;
 }

 function find(key) {
 	return this.datastore[key];
 }

 function remove(key) {
 	delete this.datastore[key];
 }

 function showAll() {
 	var sortedDict = Object.keys(this.datastore).sort();
 	for(var key = 0; key < sortedDict.length; key++) {
 		console.log("Key -> " + key + " Value -> " + this.datastore[key]);
 	}
 }


/*Example of using the Dictionary class*/

var phoneBook = new Dictionary();

phoneBook.add("Dave", 25);
phoneBook.add("John", 26);
phoneBook.showAll();


