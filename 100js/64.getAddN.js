function getAddN(a) {
  return function addN(b) {
    return a + b;
  };
}

export { getAddN };
