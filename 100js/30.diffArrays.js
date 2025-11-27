function diffArrays(numbers1, numbers2) {
  const set1 = new Set(numbers1);
  const set2 = new Set(numbers2);
  const res = [];

  for (const item1 of set1.values()) {
    if (!set2.has(item1)) res.push(item1);
  }

  for (const item2 of set2.values()) {
    if (!set1.has(item2)) res.push(item2);
  }

  return res;
}

export { diffArrays };
