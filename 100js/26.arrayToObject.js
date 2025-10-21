function arrayToObject(strings) {
  const res = {};

  for (let i = 0; i < strings.length; i += 1) {
    const item = strings[i];

    if (res[item] === undefined) {
      res[item] = i;
    }
  }

  return res;
}

export default arrayToObject;
