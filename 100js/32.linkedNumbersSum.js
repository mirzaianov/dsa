function linkedNumbersSum(node) {
  let curr = node;
  let sum = 0;

  while (curr) {
    sum += curr.value;
    curr = curr.next;
  }

  return sum;
}

export default linkedNumbersSum;
