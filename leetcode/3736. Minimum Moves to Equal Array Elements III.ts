const minMoves = (nums: number[]): number => {
  const max: number = Math.max(...nums);
  let count = 0;

  for (const n of nums) {
    count += max - n;
  }

  return count;
};

export default minMoves;
