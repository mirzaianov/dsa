function debounce<T extends (...args: any[]) => any>(func: T, wait: number): T {
  let timer: ReturnType<typeof setTimeout>;

  return function fn(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), wait);
  } as T;
}

export default debounce;
