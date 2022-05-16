export function getLocalStorageItem(key) {
  const val = localStorage.getItem(key);
  try {
    return JSON.parse(val);
  } catch (error) {
    return val;
  }
}

export function setLocalStorageItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    return false;
  }
}

export const initializeState = (key, initial) => {
  const mainState = getLocalStorageItem('c-data');
  if (!mainState) setLocalStorageItem('c-data', {});
  return (mainState && mainState[key]) || initial;
};

export const clearStorage = () => {
  localStorage.removeItem('c-data');
  localStorage.removeItem('PresetData');
};

export const updateContextState = (key, newValue) => {
  const mainState = getLocalStorageItem('c-data');
  const updatedState = { ...mainState, [key]: newValue };
  setLocalStorageItem('c-data', updatedState);
};

export const getContextState = (context, key) => {
  const mainState = getLocalStorageItem('c-data');
  const ctx = mainState[context];
  return ctx ? ctx[key] : null;
};