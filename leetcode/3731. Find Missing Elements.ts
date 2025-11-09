const findMissingElements = (nums: number[]): number[] => {
  if (nums.length < 2) return [];

  const set = new Set<number>();
  let min = Infinity;
  let max = -Infinity;

  for (const n of nums) {
    if (!set.has(n)) {
      min = Math.min(min, n);
      max = Math.max(max, n);

      set.add(n);
    }
  }

  const res: number[] = [];

  for (let i = min + 1; i < max; i += 1) {
    if (!set.has(i)) res.push(i);
  }

  return res;
};

export default findMissingElements;
