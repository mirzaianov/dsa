function maxInvocations(count) {
  const originalFn = this;
  let invocations = 0;

  function fn(...args) {
    invocations += 1;

    if (invocations <= count) return originalFn.apply(this, args);
  }

  return fn;
}

export { maxInvocations };
