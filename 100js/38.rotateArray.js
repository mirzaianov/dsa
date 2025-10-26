function rotateArray(items, n) {
  if (!items.length) return items;

  for (let i = 0; i < n; i += 1) {
    items.unshift(items.pop());
  }

  return items;
}

export default rotateArray;
