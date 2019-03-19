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

export function addRemoteMessage(message){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      dispatcher.dispatch(ActionTypes.CHANNEL_ADD_REMOTE_MESSAGE, message);
    };
}

export function createMessage(params){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.MESSAGE_CREATE__INIT);

        const response = await Api.channel.createMessage(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.MESSAGE_CREATE__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.MESSAGE_CREATE__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.MESSAGE_CREATE__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

export function uploadMessagePhoto(params){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.UPLOAD_MESSAGE_PHOTO__INIT);

        const response = await Api.channel.uploadMessagePhoto(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.UPLOAD_MESSAGE_PHOTO__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.UPLOAD_MESSAGE_PHOTO__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.UPLOAD_MESSAGE_PHOTO__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

export function createDM(params){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.CHANNEL_CREATE_DM__INIT);

        const response = await Api.channel.createDM(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.CHANNEL_CREATE_DM__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.CHANNEL_CREATE_DM__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.CHANNEL_CREATE_DM__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}
