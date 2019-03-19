/*
 * Session Actions
 */

import Api from 'api';
import { ActionTypes, ActionDispatcher, dispatchAction } from 'actions';
import Errors from 'errors';

/*
 * load
 * @action: load team data into the app
 */

export function load(userId) {
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.PROFILE_LOAD__INIT);

        const response = await Api.profile.load(userId);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.PROFILE_LOAD__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.PROFILE_LOAD__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.PROFILE_LOAD__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}
