function simpleCompression(text) {
  const n = text.length;

  if (n === 0) return '';

  let res = '';
  let i = 0;

  while (i < n) {
    let curr = text[i];
    let count = 1;

    while (curr === text[i + 1]) {
      count += 1;
      i += 1;
    }

    count === 1 ? (res += curr) : (res += `${curr}${count}`);

    i += 1;
  }

  return res;
}

export { simpleCompression };
