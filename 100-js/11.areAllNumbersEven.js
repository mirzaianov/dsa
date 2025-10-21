function areAllNumbersEven(numbers) {
  for (const num of numbers) {
    if (num % 2 !== 0) return false;
  }

  return true;
}

export default areAllNumbersEven;
