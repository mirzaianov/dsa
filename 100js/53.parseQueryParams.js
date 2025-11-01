function parseQueryParams(url) {
  const map = new Map();
  const queryString = url.split('?')[1];

  if (!queryString) return map;

  queryString.split('&').forEach((s) => {
    const [key, value = ''] = s.split('=');

    map.set(key, value);
  });

  return map;
}

export default parseQueryParams;
