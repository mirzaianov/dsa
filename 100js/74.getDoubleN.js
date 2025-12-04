function getDoubleN(n) {
  let currN = n;

  return function doubleN() {
    currN *= 2;

    return currN;
  };
}

export { getDoubleN };
