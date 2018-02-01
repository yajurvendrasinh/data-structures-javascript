/*Linked List in Javascript*/


/*
 * Making a CONSTRUCTOR function that sets the value for two properties
 * this is Node class, which will have properties "element" (that stores node's data) 
 * and "next" (stores the link for next node)
 */

function Node(element) {
	this.element = element;
	this.next = null;
}


/*
 * Making LinkedList class which will have functionality/ method of  linked list
 */

 function LinkedList() {
 	this.head = new Node('head');
 	this.find = find;
 	this.insert = insert;
 	this.remove = remove;
 	this.show = show;
 }

 function find(item) {
 	var currentNode = this.head;
 	while (currentNode.element != item) {
 		currentNode = currentNode.next;
 	}

 	return currentNode;
 }

 function insert(newElement, item) { // basically inserting after finding the 'item' value
 	var newNode = new Node(newElement);
 	var current = this.find(item);

 	newNode.next = current.next;
 	current.next = newNode; 
 }

 function show() {
 	var currentNode = this.head;

 	while(!(currentNode.next == null)) {
 		console.log(currentNode.next.element);
 		currentNode = currentNode.next;
 	}
 }

 /*Doubly Linked List*/

 function NodeDLL(element) {
 	this.element = element;
 	this.next = null;
 	this.previous = null;
 }

 function insertDLL(newElement, item) {
 	var newNode = new Node(newElement);
 	var current = this.find(item);
 	newNode.next = current.next;
 	newNode.previous = current;
 	current.next = newNode;
 }

 function remove() {
 	var currentNode = this.find(item);
 	if(!(currentNode.next === null)) {
 		currentNode.previous.next = currentNode.next;
 		currentNode.next.previous = currentNode.previous;
 		currentNode.next = null;
 		currentNode.previous = null;
 	}
 }
