const reverseInteger = (n: number): number => {
  let res = 0;

  while (n) {
    const rem: number = n % 10;

    res = res * 10 + rem;
    n = Math.floor(n / 10);
  }

  return res;
};

const mirrorDistance = (n: number): number => Math.abs(n - reverseInteger(n));

export default mirrorDistance;
