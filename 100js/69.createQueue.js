function createQueue() {
  const items = [];

  const queue = {
    add(a) {
      items.push(a);
    },

    remove() {
      return items.shift();
    },

    list() {
      return items;
    },
  };

  return queue;
}

export { createQueue };
