function reverseReduce(callbackFn, initialValue) {
  const idx = initialValue !== undefined ? this.length - 1 : this.length - 2;
  let res = initialValue ?? this.at(-1);

  for (let i = idx; i >= 0; i -= 1) {
    res = callbackFn(res, this[i], i);
  }

  return res;
}

export { reverseReduce };
