function bfsTraversal(tree) {
  const res = [];
  const queue = [tree];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr !== undefined) {
      res.push(curr.value);
      queue.push(curr.left, curr.right);
    }
  }

  return res;
}

export { bfsTraversal };
