const divideArray = (nums: number[], k: number): number[][] => {
  const sorted: number[] = [...nums].sort((a, b) => a - b);
  const res: number[][] = [];

  for (let i = 2; i < sorted.length; i += 3) {
    const first: number = sorted[i - 2];
    const second: number = sorted[i - 1];
    const third: number = sorted[i];

    if (third - first > k) return [];

    res.push([first, second, third]);
  }

  return res;
};

export default divideArray;
