function uniqBy(identity) {
  const set = new Set();
  const res = [];

  for (const item of this) {
    const curr = identity(item);

    if (!set.has(curr)) {
      res.push(item);
      set.add(curr);
    }
  }

  return res;
}

export { uniqBy };
