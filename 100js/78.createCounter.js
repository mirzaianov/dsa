function createCounter(initialValue) {
  let count = initialValue;

  return {
    getValue() {
      return count;
    },
    increment() {
      count += 1;
    },
    decrement() {
      count -= 1;
    },
  };
}

export { createCounter };
