/*
 * Channel API connection
 */

import Errors from 'errors';
import { ServerRequest } from 'api';
import Storage, { StorageKeys } from 'api/storage';
import Config from 'config';

export async function load(channelId) {
  const path = '/channels/' + channelId;
  let response;
  const accessToken = await Storage.getItem(StorageKeys.ACCESS_TOKEN);

  try {
    response = await new ServerRequest({
      path,
      accessToken
    }).get();

    if (response.token) {
      response = await _userAuthentication(response);
    }
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}

export async function createChannel(bodyParams) {
  const path = '/channels';
  let response;
  const accessToken = await Storage.getItem(StorageKeys.ACCESS_TOKEN);

  try {
    response = await new ServerRequest({
      path,
      accessToken,
      bodyParams
    }).post();
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}
