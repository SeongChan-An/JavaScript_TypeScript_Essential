export const setItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (exception) {
    alert('저장실패');
  }
};

export const getItem = (key, defaultValue) => {
  try {
    const storedValue = localStorage.getItem(key);

    if (storedValue !== null && JSON.parse(storedValue).length > 0) {
      return JSON.parse(storedValue);
    }

    return defaultValue;
  } catch (exception) {
    setItem(key, defaultValue);
    return defaultValue;
  }
};
