function mergeSortedArrays(numbers1, numbers2) {
  const res = [];
  let i = 0;
  let j = numbers2.length - 1;

  while (i < numbers1.length && j >= 0) {
    if (numbers1[i] < numbers2[j]) {
      res.push(numbers1[i]);
      i += 1;
    } else if (numbers1[i] > numbers2[j]) {
      res.push(numbers2[j]);
      j -= 1;
    } else {
      res.push(numbers1[i], numbers2[j]);
      i += 1;
      j -= 1;
    }
  }

  return [...res, ...numbers1.slice(i), ...numbers2.slice(0, j + 1).reverse()];
}

export { mergeSortedArrays };
