function flow(...functions) {
  const [first, ...others] = functions;

  return function run(...args) {
    let res = first(...args);

    for (const f of others) {
      res = f(res);
    }

    return res;
  };
}

export { flow };
