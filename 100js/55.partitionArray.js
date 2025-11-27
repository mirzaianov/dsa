function partitionArray(numbers, predicateCallback) {
  const fail = [];
  const pass = [];

  for (const n of numbers) {
    predicateCallback(n) ? pass.push(n) : fail.push(n);
  }

  return { fail, pass };
}

export { partitionArray };
