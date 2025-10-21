function getCurry(callback) {
  return function curried(...args) {
    if (!args.length) return callback();

    return function next(nextArg) {
      if (nextArg === undefined) return callback(...args);

      return curried(...args, nextArg);
    };
  };
}

export default getCurry;
