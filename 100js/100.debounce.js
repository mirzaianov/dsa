const debounce = (callback) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), 1000);
  };
};

export default debounce;
