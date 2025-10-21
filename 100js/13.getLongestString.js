function getLongestString(arrayOfStrings) {
  const res = [0, ''];

  for (const item of arrayOfStrings) {
    const len = item.length;

    if (len > res[0]) {
      res[0] = len;
      res[1] = item;
    }
  }

  return res[1];
}

export default getLongestString;
