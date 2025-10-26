function biggestPowerOf2(number) {
  if (number < 1) return -1;

  let power = 0;
  let curr = 2;

  while (curr <= number) {
    curr *= 2;
    power += 1;
  }

  return power;
}

export default biggestPowerOf2;
