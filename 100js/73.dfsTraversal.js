function dfsTraversal(tree) {
  const res = [];

  function dfs(node) {
    if (!node) return;

    res.push(node.value);

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }

  dfs(tree);

  return res;
}

export { dfsTraversal };
