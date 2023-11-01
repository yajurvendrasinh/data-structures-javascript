// Binary Search tree is a tree datastructer with following properties
//  each left node is smaller than it's parent node
// each right node is greater than its parent node
// each parent node will at most have 2 child nodes and no more

//  Following is the implementation of a Binary Search Tree

// implementing a NODE CLASS

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BSTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value < newNode.value) {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    } else {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }
  }
}

const bst = new BSTree();

console.log('Is tree empty', bst.isEmpty());
