/*
 * Profile API connection
 */

import Errors from 'errors';
import { ServerRequest } from 'api';
import Storage, { StorageKeys } from 'api/storage';
import Config from 'config';

export async function load(userId) {
  const path = '/user/profile';
  let response;
  const urlParams = {
    userId
  };
  const accessToken = await Storage.getItem(StorageKeys.ACCESS_TOKEN);

  try {
    response = await new ServerRequest({
      path,
      accessToken,
      urlParams,
    }).get();
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}
