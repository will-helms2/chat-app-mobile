/*
 * Action Dispatcher
 */

import { ActionTypes } from 'actions';
import Errors from 'errors';

export default class ActionDispatcher {
  _dispatch;

  constructor(dispatch) {
    this._dispatch = dispatch;
  }

  dispatch(type, payload) {
    this._dispatch({
      type,
      payload,
    });
  }
}

/*
 * dispatchAction
 * @action: generic action dispatcher
 */

export function dispatchAction(action, payload, failure = ActionTypes.ERROR) {
  return async dispatch => {
    const dispatcher = new ActionDispatcher(dispatch);
    try {
      dispatcher.dispatch(action, payload);
    } catch (error) {
      dispatcher.dispatch(failure, Errors.resolveError(error));
    }
  };
}
