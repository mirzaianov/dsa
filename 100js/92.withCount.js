function withCount() {
  const originalFn = this;

  function fn(...props) {
    fn.count += 1;

    return originalFn.apply(this, props);
  }

  fn.count = 0;

  return fn;
}

export { withCount };
