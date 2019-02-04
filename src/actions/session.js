/*
 * Session Actions
 */

import Api from 'api';
import { ActionTypes, ActionDispatcher, dispatchAction } from 'actions';
import Errors from 'errors';

/*
 * signIn
 * @action: verify email and password and call to API
 */

export function signIn(email, password) {
  return async dispatch => {
    const dispatcher = new ActionDispatcher(dispatch);
    try {
      dispatcher.dispatch(ActionTypes.SIGN_IN__START);
      if (!email || email === '' || !password || password === '') {
        dispatcher.dispatch(ActionTypes.SIGN_IN__EMPTY);
      } else {
        const response = await Api.session.signIn(email, password);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.SIGN_IN__FAILURE, response);
          return;
        }

        if (response.token) {
          dispatcher.dispatch(ActionTypes.SIGN_IN__SUCCESS, response);
        } else {
          dispatcher.dispatch(ActionTypes.SIGN_IN__INVALID);
        }
      }
    } catch (error) {
      dispatcher.dispatch(
        ActionTypes.SIGN_IN__FAILURE,
        Errors.resolveError(error),
      );
    }
  };
}

/*
 * signOut
 * @action: api call to sign out and clear access token
 */

export function signOut() {
  return async dispatch => {
    const dispatcher = new ActionDispatcher(dispatch);
    try {
      await Api.session.signOut();

      dispatcher.dispatch(ActionTypes.SIGN_OUT);
    } catch (error) {
      Errors.resolveError(error);
    }
  };
}

/*
 * signUp
 */
export function signUp(params) {
  return async dispatch => {
    const dispatcher = new ActionDispatcher(dispatch);
    try {
      dispatcher.dispatch(ActionTypes.SIGN_UP__INIT);

      const response = await Api.session.signUp(params);

      if (response.error) {
        dispatcher.dispatch(ActionTypes.SIGN_UP__ERROR, response);
        return;
      }

      dispatcher.dispatch(ActionTypes.SIGN_UP__SUCCESS, response);
    } catch (error) {
      dispatcher.dispatch(
        ActionTypes.SIGN_UP__ERROR,
        Errors.resolveError(error),
      );
    }
  };
}

/*
 * Validate
 * @action: api call to validate the token
 */

export function validate() {
  return async dispatch => {
    const dispatcher = new ActionDispatcher(dispatch);
    try {
      dispatcher.dispatch(ActionTypes.VALIDATE__INIT);

      const response = await Api.session.validate();

      if (response.error) {
        dispatcher.dispatch(ActionTypes.VALIDATE__ERROR, response);
        return;
      }

      dispatcher.dispatch(ActionTypes.VALIDATE__SUCCESS, response);
    } catch (error) {
      dispatcher.dispatch(
        ActionTypes.VALIDATE__ERROR,
        Errors.resolveError(error),
      );
    }
  };
}
