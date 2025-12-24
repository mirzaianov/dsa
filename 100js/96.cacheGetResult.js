function cacheGetResult(getPromise) {
  let res;
  let isCached = false;

  return async function getResult() {
    if (isCached) return res;

    res = await getPromise();
    isCached = true;

    return res;
  };
}

export { cacheGetResult };
