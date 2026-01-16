function clearAllTimeout() {
  let id = setTimeout(() => {}, 0);

  while (id >= 0) {
    window.clearTimeout(id);
    id -= 1;
  }
}

export default clearAllTimeout;
