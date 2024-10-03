import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export function saveDataToStorage(key, value) {
  try {
    storage.set(key, value);
  } catch (e) {
    return e;
  }
  return true;
}
export function getNumberFromStorage(key) {
  const value = storage.getNumber(key);
  return value;
}
export function getStringFromStorage(key) {
  const value = storage.getString(key);
  return value;
}
export function getBooleanFromStorage(key) {
  const value = storage.getBoolean(key);
  return value;
}
