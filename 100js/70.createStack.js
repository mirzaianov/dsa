function createStack() {
  const items = [];

  const stack = {
    add(item) {
      items.unshift(item);
    },
    remove() {
      return items.shift();
    },
    list() {
      return items;
    },
  };

  return stack;
}

export { createStack };
