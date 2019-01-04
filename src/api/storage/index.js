/*
 * Local Storage
 */

import { AsyncStorage } from 'react-native';
import Keys from 'api/storage/keys';
import { reduce } from 'lodash';
import Errors from 'errors';

/*
 * setItem
 * @action: save an item in local storage
 */

async function setItem(key, item) {
  let response = false;
  try {
    await AsyncStorage.setItem(key, JSON.stringify(item));
    response = true;
  } catch (error) {
    Errors.resolveError(error);
  }
  return response;
}

/*
 * getItem
 * @action: find and return item from local storage, returns null if item does not exist
 */

async function getItem(key) {
  let response;
  try {
    response = JSON.parse(await AsyncStorage.getItem(key));
  } catch (error) {
    Errors.resolveError(error);
  }
  return response;
}

/*
 * removeItem
 * @action: remove item from local storage
 */

async function removeItem(key) {
  let response = false;
  try {
    await AsyncStorage.removeItem(key);
    response = true;
  } catch (error) {
    Errors.resolveError(error);
  }
  return response;
}

/*
 * removeAll
 * @action: remove all App items from local storage
 */

async function removeAll() {
  let response = false;
  try {
    const keysList = await keys();
    await AsyncStorage.multiRemove(keysList);
    response = true;
  } catch (error) {
    Errors.resolveError(error);
  }
  return response;
}

/*
 * keys
 * @action: return array of keys used on this app
 */

async function keys() {
  let response;

  try {
    response = reduce(
      Keys,
      (newKeys, newKey) => {
        newKeys.push(newKey);
        return newKeys;
      },
      [],
    );
  } catch (error) {
    Errors.resolveError(error);
  }
  return response;
}

/*
 * StorageKeys Export
 */

export * as StorageKeys from 'api/storage/keys';

/*
 * Storage
 */

export default {
  setItem,
  getItem,
  removeItem,
  removeAll,
  keys,
};
