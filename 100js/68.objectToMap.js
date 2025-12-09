function objectToMap(object) {
  if (Array.isArray(object)) {
    const array = [];

    for (const item of object) {
      array.push(objectToMap(item));
    }

    return array;
  }

  if (typeof object === 'object' && object !== null) {
    const map = new Map();

    for (const key in object) {
      const value = objectToMap(object[key]);

      map.set(key, value);
    }

    return map;
  }

  return object;
}

export { objectToMap };
