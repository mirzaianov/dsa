function everyNPositions(message, step) {
  let res = '';
  let i = 0;

  while (message[i]) {
    res += message[i];
    i += step;
  }

  return res;
}

export default everyNPositions;
