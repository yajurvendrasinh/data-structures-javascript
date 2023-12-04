function invertTree(root) {
  if (root === null) return root;
  else {
    let tempNode;
    tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
  }

  invertTree(root.left);
  invertTree(root.right);
  return root;
}

// other way of doing same thing with recursion
function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS
function invertTree(root) {
  const stack = [root];

  while (stack.length) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}
