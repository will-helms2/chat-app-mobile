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

export function load(teamId) {
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.TEAM_LOAD__INIT);

        const response = await Api.team.load(teamId);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.TEAM_LOAD__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.TEAM_LOAD__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.TEAM_REFRESH__ERROR,
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
        dispatcher.dispatch(ActionTypes.TEAM_REFRESH__INIT);

        const response = await Api.team.load(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.TEAM_REFRESH__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.TEAM_REFRESH__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.TEAM_REFRESH__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}

export function createTeam(params){
    return async dispatch => {
      const dispatcher = new ActionDispatcher(dispatch);
      try {
        dispatcher.dispatch(ActionTypes.TEAM_CREATE__INIT);

        const response = await Api.team.createTeam(params);

        if (response.error) {
          dispatcher.dispatch(ActionTypes.TEAM_CREATE__ERROR, response);
          return;
        }

        dispatcher.dispatch(ActionTypes.TEAM_CREATE__SUCCESS, response);
      } catch (error) {
        dispatcher.dispatch(
          ActionTypes.TEAM_CREATE__ERROR,
          Errors.resolveError(error),
        );
      }
    };
}
