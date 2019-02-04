/*
 * Session API connection
 */

import Errors from 'errors';
import { ServerRequest } from 'api';
import Storage, { StorageKeys } from 'api/storage';
import Config from 'config';

export async function signIn(email, password) {
  const path = '/user/signin'; // vimbel.com/api/user/signin
  let response;
  try {
    response = await new ServerRequest({
      path,
      bodyParams: {
        email,
        password,
      },
    }).post();

    if (response.token) {
      response = await _userAuthentication(response);
    }
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}

/*
 * Get Access Token
 * @action: returns current access token
 */

export async function getAccessToken() {
  let response;
  try {
    response = await Storage.getItem(StorageKeys.ACCESS_TOKEN);
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}

/*
 * Validate Access Token
 * @action: remove current access token from local storage
 */

export async function clearAccessToken() {
  let response = false;

  try {
    response = await Storage.removeItem(StorageKeys.ACCESS_TOKEN);
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}


/*
 * _userAuthentication
 */

async function _userAuthentication(response) {

  // Success
  await Storage.setItem(StorageKeys.ACCESS_TOKEN, response.token);

  return {
    ...response,
  };
}

export async function signUp(params){
  const path = '/user';
  let response = null;

  const bodyParams = params;

  try {

    response = await new ServerRequest({
      path,
      bodyParams,
    }).post();

    if (response.user) {
      response = await _userAuthentication(response);
    }
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;
}

export async function validate(){
  const path = '/user/validate';
  let response = null;
  try {
    const accessToken = await Storage.getItem(StorageKeys.ACCESS_TOKEN);

    response = await new ServerRequest({
      path,
      accessToken,
    }).get();
  } catch (error) {
    response = Errors.resolveError(error);
  }

  return response;

}

export async function signOut(){
  //const path = '/sign-out';
  //let response;
  try {
    // Remove Access Token
    await Storage.removeItem(StorageKeys.ACCESS_TOKEN);

    // response = await new ServerRequest({
    //   path,
    // }).delete();
  } catch (error) {
    //response = Errors.resolveError(error);
  }

  //return response;
}
