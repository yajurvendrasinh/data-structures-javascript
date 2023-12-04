function BreadthFirstSearch() {
  let queue = [];
  let result = []; // printing tree breadth wise

  queue.push(this.root);

  while (queue.length) {
    let currentNode = queue.shift();
    result.push(currentNode.val);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return result;
}
