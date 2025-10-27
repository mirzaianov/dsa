function onlySet(set1, set2) {
  const set = new Set();

  for (const item of set1) {
    if (!set2.has(item)) set.add(item);
  }

  return set;
}

function compareSets(setA, setB) {
  return {
    onlyA: onlySet(setA, setB),
    onlyB: onlySet(setB, setA),
    union: new Set([...setA, ...setB]),
  };
}

export default compareSets;
