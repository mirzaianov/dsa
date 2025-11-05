function pickNested(data, path) {
  const keys = path.split('.');

  if (!keys.length) return undefined;

  function dfs(obj, i) {
    if (!obj[keys[i]] || i === keys.length) return undefined;

    if (Number.isInteger(Number(keys[i])) && typeof obj[keys[i]] === 'string') return undefined;

    if (obj[keys[i]] && i === keys.length - 1) return obj[keys[i]];

    return dfs(obj[keys[i]], i + 1);
  }

  return dfs(data, 0);
}

export default pickNested;
