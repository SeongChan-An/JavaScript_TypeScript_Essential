let timer;
export function debounce(callback, delay = 200) {
  if (timer) {
    clearTimeout(timer);
  }

  return (...args) => {
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
