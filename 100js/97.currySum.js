function currySum(num) {
  if (num === undefined) return 0;

  let sum = num;

  return function next(nextNum) {
    if (nextNum === undefined) return sum;

    sum += nextNum;

    return next;
  };
}

export default currySum;
