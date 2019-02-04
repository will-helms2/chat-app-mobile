/*
 * Team API connection
 */

import Errors from 'errors';
import { ServerRequest } from 'api';
import Storage, { StorageKeys } from 'api/storage';
import Config from 'config';

export async function load(teamId) {
  const path = '/teams/' + teamId;
  let response;
  const accessToken = await Storage.getItem(StorageKeys.ACCESS_TOKEN);

  try {
    response = await new ServerRequest({
      path,
      accessToken
    }).get();
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}

export async function createTeam(bodyParams) {
  const path = '/teams';
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
