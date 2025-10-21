function throttle(callback) {
  let isPaused = false;

  return function (...args) {
    if (isPaused) return;

    callback(...args);
    isPaused = true;

    setTimeout(() => {
      isPaused = false;
    }, 1000);
  };
}

export default throttle;
