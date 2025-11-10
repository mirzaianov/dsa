const removeZeros = (n: number): number => {
  let res = 0;
  let mult = 1;

  while (n) {
    const rem: number = n % 10;

    if (rem !== 0) {
      res = rem * mult + res;
      mult *= 10;
    }

    n = Math.floor(n / 10);
  }

  return res;
};

export default removeZeros;
