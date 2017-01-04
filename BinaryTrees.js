/*Implementing binary trees / binary search trees in JavaScript*/

function Node(data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}

function show() {
	return this.data;
}

function BST() {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.preOrder = preOrder;
	this.postOrder = postOrder;
}


function insert(data) {
	var newData = new Node(data, null, null);

	if(this.root = null) {
		this.root = newData;
	}
	else {
		var current = this.root;
		var parent;
		while(true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current == null) {
					parent.left = newData;
					break;
				}
			}
			else {
				current = current.right;
				if (current == null) {
					parent.right = newData;
					break;
				}
			}
		}
	}
}


function inOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		putstr(node.show() + " ");
		inOrder(node.right);
	}
}

function preOrder(node) {
	if (!(node == null)) {
		putstr(node.show() + " ");
		inOrder(node.left);
		inOrder(node.right);
	}
}

function postOrder(node) {
	if (!(node == null)) {
		inOrder(node.left);
		inOrder(node.right);
		putstr(node.show() + " ");
	}
}
