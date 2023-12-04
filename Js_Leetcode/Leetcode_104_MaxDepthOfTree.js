//  RECURSIVE DFS
var maxDepth = function (root) {
  if (root === null) return 0;

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

// ITERATIVE BFS
var maxDepth = function (root) {
  if (root === null) return 0;
  let level = 0;
  let queue = [root];

  while (queue.length !== 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    level++;
  }

  return level;
};
