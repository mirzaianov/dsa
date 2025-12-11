async function createPromise(number) {
  try {
    if (number > 0) {
      return `It's positive!`;
    } else {
      throw new Error();
    }
  } catch (e) {
    return `It's negative!`;
  }
}

export { createPromise };
