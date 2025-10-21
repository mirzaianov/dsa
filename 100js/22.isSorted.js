function isSorted(numbers) {
  let type;

  if (numbers[0] < numbers[1]) type = 'a';
  if (numbers[0] > numbers[1]) type = 'b';

  for (let i = 0; i < numbers.length - 1; i += 1) {
    if (type === 'a' && numbers[i] >= numbers[i + 1]) return false;
    if (type === 'b' && numbers[i] <= numbers[i + 1]) return false;
  }

  return true;
}

export default isSorted;
