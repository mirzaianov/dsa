const getDigits = (num: number): number[] => {
  const res: number[] = [];

  while (num) {
    const curr = num % 10;

    res.unshift(curr);

    num = Math.floor(num / 10);
  }

  return res;
};

const waviness = (num: number): number => {
  let count = 0;

  if (num < 100) return 0;

  const arr: number[] = getDigits(num);

  for (let i = 1; i < arr.length - 1; i += 1) {
    if (
      (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) ||
      (arr[i - 1] > arr[i] && arr[i + 1] > arr[i])
    ) {
      count += 1;
    }
  }

  return count;
};

const totalWaviness = (num1: number, num2: number): number => {
  let res = 0;

  for (let i = num1; i <= num2; i += 1) {
    res += waviness(i);
  }

  return res;
};

export default totalWaviness;
