const sumDivisibleByK = (nums: number[], k: number): number => {
  const map = new Map<number, number>();

  for (const n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  let res = 0;

  for (const [key, value] of map) {
    if (value % k === 0) res += key * value;
  }

  return res;
};

export default sumDivisibleByK;
