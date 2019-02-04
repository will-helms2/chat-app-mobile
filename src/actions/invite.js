/*
 * Invite Actions
 */

import Api from 'api';
import { ActionTypes, ActionDispatcher, dispatchAction } from 'actions';
import Errors from 'errors';

/*
 * load
 * @action: load team data into the app
 */

export function load() {
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.INVITE_LOAD__INIT);

        const response = await Api.invite.load();

        if (response.error) {
          dispatcher.dispatch(ActionTypes.INVITE_LOAD__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.INVITE_LOAD__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.INVITE_REFRESH__ERROR,
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
        dispatcher.dispatch(ActionTypes.INVITE_REFRESH__INIT);

        const response = await Api.invite.load();

        if (response.error) {
          dispatcher.dispatch(ActionTypes.INVITE_REFRESH__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.INVITE_REFRESH__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.INVITE_REFRESH__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

export function createInvite(params){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.INVITE_CREATE__INIT);

        const response = await Api.invite.createInvite(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.INVITE_CREATE__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.INVITE_CREATE__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.INVITE_CREATE__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

export function acceptInvitation(teamId){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.INVITE_ACCEPT__INIT);

        const response = await Api.invite.acceptInvitation(teamId);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.INVITE_ACCEPT__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.INVITE_ACCEPT__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.INVITE_CREATE__ERROR,
          Errors.resolveError(error),
        );
      }
   };
}
