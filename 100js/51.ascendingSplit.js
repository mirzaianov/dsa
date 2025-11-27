function ascendingSplit(numbers) {
  const n = numbers.length;

  if (n < 2) return numbers;

  const res = [];
  let temp = [numbers[0]];

  for (let i = 1; i < n; i += 1) {
    if (numbers[i - 1] > numbers[i]) {
      res.push([...temp]);
      temp.length = 0;
    }

    temp.push(numbers[i]);

    if (i === n - 1) res.push([...temp]);
  }

  return res;
}

export { ascendingSplit };
