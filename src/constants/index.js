/*
 * Constants
 */

import { Platform as NativePlatform, Dimensions, Linking } from 'react-native';
import { isEmpty, trim } from 'lodash';

export const Screen = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const Platform = {
  isAndroid: NativePlatform.OS === 'android',
  isIOS: NativePlatform.OS === 'ios',
  os: NativePlatform.OS,
  isIphoneX: () => {
    return (
      NativePlatform.OS === 'ios' &&
      (Screen.height === 812 || Screen.width === 812)
    );
  },
};

export const MediaItemType = {
  PHOTO: 'photo',
  VIDEO: 'video',
};

export function stringIsEmpty(str = '') {
  return isEmpty(trim(str));
}

export function isEmail(email = ''){
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
}

export * as Responses from './responses';
