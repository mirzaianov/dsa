const findCorrespondingNode = (rootA, rootB, target) => {
  if (!rootA) return;

  if (rootA === target) return rootB;

  for (let i = 0; i < rootA.children.length; i += 1) {
    const res = findCorrespondingNode(rootA.children[i], rootB.children[i], target);

    if (res) return res;
  }
};

export default findCorrespondingNode;
