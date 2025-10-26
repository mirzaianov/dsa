function areValuesUnique(numbers) {
  const set = new Set();

  for (const num of numbers) {
    if (set.has(num)) return false;

    set.add(num);
  }

  return true;
}

export default areValuesUnique;
