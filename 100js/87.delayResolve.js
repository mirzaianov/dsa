function delayResolve(promise, millis) {
  return Promise.all([promise, new Promise((resolve) => setTimeout(resolve, millis))]).then(
    ([value]) => value,
  );
}

export { delayResolve };
