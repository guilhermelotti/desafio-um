const APP_KEY = "TODOAPP";

export function getStorageItem(key) {
  const data = window.localStorage.getItem(`${APP_KEY}_${key}`);
  return JSON.parse(data); // convert string into an object
}

export function setStorageItem(key, value) {
  const data = JSON.stringify(value);
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data);
}
