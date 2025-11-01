function findUniqueNumber(numbers) {
  let res = 0;

  for (const n of numbers) {
    res ^= n;
  }

  return res;
}

export default findUniqueNumber;
