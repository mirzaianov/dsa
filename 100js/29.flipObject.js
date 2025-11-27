function flipObject(people) {
  const res = {};

  for (const item in people) {
    if (res[people[item]] === undefined) {
      res[people[item]] = [item];
    } else {
      res[people[item]] = [...res[people[item]], item];
    }
  }

  return res;
}

export { flipObject };
