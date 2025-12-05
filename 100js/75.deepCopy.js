function copy(data) {
  // primitive
  if (typeof data !== 'object') return data;

  // array
  if (Array.isArray(data)) {
    const res = [];

    for (const value of data) {
      const newValue = copy(value);

      res.push(newValue);
    }

    return res;
  }

  // map
  if (data instanceof Map) {
    const res = new Map();

    for (const [key, value] of data) {
      const newValue = copy(value);

      res.set(key, newValue);
    }

    return res;
  }

  // object
  if (typeof data === 'object' && data !== null) {
    const res = {};

    for (const key in data) {
      const value = data[key];
      const newValue = copy(value);

      res[key] = newValue;
    }

    return res;
  }
}

function deepCopy(object) {
  const result = {};

  for (const key in object) {
    const value = object[key];

    result[key] = copy(value);
  }

  return result;
}

export { deepCopy };
