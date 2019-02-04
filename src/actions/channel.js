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

export function load(channelId) {
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.CHANNEL_LOAD__INIT);

        const response = await Api.channel.load(channelId);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.CHANNEL_LOAD__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.CHANNEL_LOAD__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.CHANNEL_LOAD__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

/*
 * signOut
 * @action: api call to sign out and clear access token
 */

export function refresh() {
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.CHANNEL_REFRESH__INIT);

        const response = await Api.channel.load(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.CHANNEL_REFRESH__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.CHANNEL_REFRESH__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.CHANNEL_REFRESH__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

export function createChannel(params){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.CHANNEL_CREATE__INIT);

        const response = await Api.channel.createChannel(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.CHANNEL_CREATE__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.CHANNEL_CREATE__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.CHANNEL_CREATE__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}
