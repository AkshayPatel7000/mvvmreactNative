import AsyncStorage from '@react-native-async-storage/async-storage';
export function setItem(key, data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem(key, data);
}
export function getItem(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key).then(data => {
      resolve(JSON.parse(data));
    });
  });
}
export function removeItem(key) {
  return AsyncStorage.removeItem(key);
}
export function clearAsyncStorate(key) {
  return AsyncStorage.clear();
}

export function setToken(data) {
  data = JSON.stringify(data);
  return AsyncStorage.setItem('token', data);
}
export function getToken() {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('token').then(data => {
      resolve(JSON.parse(data));
    });
  });
}
