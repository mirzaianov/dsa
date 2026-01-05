const reversePrefix = (s: string, k: number): string => {
  let front: string[] = [];
  let back = '';

  for (let i = 0; i < s.length; i += 1) {
    const curr: string = s[i];

    if (i < k) {
      front.unshift(curr);
    } else {
      back += curr;
    }
  }

  return front.join('') + back;
};

export default reversePrefix;

