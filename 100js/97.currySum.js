function currySum(a) {
  if (!a) return 0;

  return function curry(b) {
    if (!b) return a;

    return currySum(a + b);
  };
}

export { currySum };
