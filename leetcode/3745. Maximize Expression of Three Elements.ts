const maximizeExpressionOfThree = (nums: number[]): number => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let min = Infinity;

  for (const n of nums) {
    if (n >= firstMax) {
      secondMax = firstMax;
      firstMax = n;
    }

    if (n < firstMax && n > secondMax) {
      secondMax = n;
    }

    if (n < min) {
      min = n;
    }
  }

  return firstMax + secondMax - min;
};

export default maximizeExpressionOfThree;
