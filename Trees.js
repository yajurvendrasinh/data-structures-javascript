/* Trees are specifically made of 'nodes'  (connected via 'edges') and 'leaves' 
 * Nodes represent the position and edges represent the relationship between the nodes
 * Trees are hirarchical structures and can represent the hirarchy. Hence trees can be broken down into levels, root and children/leaves
 * Search and I/O operation are very quick in tree data-structure
 */

 /* There are special types of trees
  * BINARY TREE
  * the tree where each node has maximum two child nodes/ leaves can be categorized as binary tree
  * BINARY SEARCH TREE
  * the child nodes are arranged in a particulas manner where left child is always smaller than the root and the right child is always greater than the root
  */




function Node (data, left, right) {
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
	this.find = find;
} 

function BinarySearchTree () {
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
	this.postOrder = postOrder;
	this.preOrder = preOrder;
	this.getMin = getMin;
	this.getMax = getMax;
}

function show () {
	return this.data;
}


function insert (data) {
	var newNode = new Node(data, null, null);

	if( this.root === null ) {
		this.root = data;
		return; 
	}
	
	else {
		var current = this.root;
		var parent;
		while(true) {
			parent = current;
			if (data < current.data) {
				current = current.left;
				if (current === null) {
						parent.left = data;
						break;
				}
			}

			else {
				current = current.right;
				if (current === null) {
					parent.right = data;
					break;
				}
			}
		}
	}
}

function inOrder (node) {
	if(!(node === null)) {
		inOrder(node.left);
		console.log(node.show() + "  ");
		inOrder(node.right);
	}
}

function preOrder (node) {
	if(!(node === null)) {
		console.log(node.show() + " ");
		preOrder(node.left);
		preOrder(node.right);
	}
}

function postOrder (node) {
	if(!(node === null)) {
		postOrder(node.left);
		postOrder(node.right);
		console.log(node.show() + " ");
	}
}


function getMin () {
	var current = this.root;
	while (current.left !== null) {
		current = current.left;
	}
	return current.data;
}

function getMax () {
	var current = this.root;
	while (current.right !== null) {
		current = current.right;
	}
	return current.data;
}

function find (data) {
	var current = this.root;

	while(current.data !== data) {
		if (data < current.data) {
			current = current.left
		}
		else {
			current = current.right;
		}
		if(current === null) {
			return null;
		}
	}
	return current;	
}


function size (node) {

	if (node.data !== null) {
		return (size(node.left) + 1 + size(node.right));
	}
	else {
		return null;
	}
}

function maxDepth (node) {
	if(node.data === null) {
		return null;
	}
	else {
		var leftSubDepth;
		var rightSubDepth;

		leftSubDepth = maxDepth(node.left);
		rightSubDepth = maxDepth(node.right);

		if (leftSubDepth > rightSubDepth) {
			return (leftSubDepth + 1);
		}
		else {
			return (rightSubDepth + 1);
		}
	}
}

/*Removing node*/

function remove(data) {
	root = removeNode(this.root, data);
}

function removeNode (node, data) {
	if (node === null) {
		return null;
	}

	if(data == node.data) {
		if(node.left === null && node.right === null) {
			return null;
		}

		if (node.left === null) {
			return node.right;
		}

		if (node.right === null) {
			return node.left;
		}

		var temp = getSmallest(node.right);
		node.data = temp.data;
		node.right = removeNode(node.right, temp.data);
		return node;
	}

	else if (data < node.data) {
		node.left = removeNode(node.left, data);
		return node;
	}

	else {
		node.right = removeNode(node.right, data);
		return node;
	}
}



