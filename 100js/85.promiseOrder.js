function promiseOrder(promises) {
  const n = promises.length;
  const res = [];
  let idx = 0;

  return new Promise((resolve) => {
    for (let i = 0; i < n; i += 1) {
      promises[i].then(() => {
        res[i] = idx;
        idx += 1;

        if (idx === n) resolve(res);
      });
    }
  });
}

export { promiseOrder };
