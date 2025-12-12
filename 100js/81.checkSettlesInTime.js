async function checkSettlesInTime(promise, maxTime) {
  return await Promise.race([
    (async () => {
      await promise;
      return true;
    })(),
    new Promise((resolve) => setTimeout(() => resolve(false), maxTime)),
  ]);
}

export { checkSettlesInTime };
