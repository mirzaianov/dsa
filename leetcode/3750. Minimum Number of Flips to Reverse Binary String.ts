const minimumFlips = (n: number): number => {
  const s: string = n.toString(2);
  const r: string = s.split('').reverse().join('');
  let count = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] !== r[i]) count += 1;
  }

  return count;
};

export default minimumFlips;
