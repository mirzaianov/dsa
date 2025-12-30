function throttle(callback, period = 1000) {
  let isPaused = false;

  return function (...args) {
    if (isPaused) return;

    callback(...args);
    isPaused = true;
    setTimeout(() => (isPaused = false), period);
  };
}

export { throttle };
