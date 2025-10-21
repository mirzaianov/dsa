const alternatingSum = (nums: number[]): number =>
  nums.reduce(
    (acc: number, item: number, idx: number): number => acc + (idx & 1 ? -item : item),
    0,
  );

export default alternatingSum;
