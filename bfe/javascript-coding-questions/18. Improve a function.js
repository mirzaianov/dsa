/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */

function excludeItems(items, excludes) {
  const store = new Map();

  for (let { k, v } of excludes) {
    if (!store.has(k)) store.set(k, new Set());

    store.get(k).add(v);
  }

  return items.filter((x) => {
    for (const key in x) {
      if (store.has(key) && store.get(key).has(x[key])) return false;
    }

    return true;
  });
}

export default excludeItems;
