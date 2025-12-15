function isDeepEqual(object1, object2) {
  if (typeof object1 !== typeof object2) return false;

  // Array
  if (Array.isArray(object1) && Array.isArray(object2)) {
    const n1 = object1.length;

    if (n1 !== object2.length) return false;

    for (let i = 0; i < n1; i += 1) {
      if (!isDeepEqual(object1[i], object2[i])) return false;
    }

    return true;
  }

  // Map
  if (object1 instanceof Map && object2 instanceof Map) {
    if (object1.size !== object2.size) return false;

    for (const [key1, value1] of object1) {
      if (!isDeepEqual(value1, object2.get(key1))) return false;
    }

    return true;
  }

  // Date
  if (object1 instanceof Date && object2 instanceof Date) {
    return object1.getTime() === object2.getTime();
  }

  // Object
  if (typeof object1 === 'object' && typeof object2 === 'object') {
    if (Object.keys(object1).length !== Object.keys(object2).length) return false;

    for (const key1 in object1) {
      if (!isDeepEqual(object1[key1], object2[key1])) return false;
    }

    return true;
  }

  // Primitive
  return object1 === object2;
}

export { isDeepEqual };
