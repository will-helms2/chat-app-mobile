/*
 * Team Reducer
 */

import Config from 'config';
import { ActionTypes } from 'actions';

export const initialLoadState = {
  loading: false,
  loaded: false,
  error: null,
  errors: null,
};

const initialState = {
  ...initialLoadState,
};

export default function team(state = initialState, action = {}) {
  const { payload = {} } = action;

  switch (action.type) {
    case ActionTypes.PROFILE_LOAD__INIT: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case ActionTypes.PROFILE_LOAD__SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        loaded: true,
      };
    }
    case ActionTypes.PROFILE_LOAD__ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error,
        errors: payload.errors,
      };
    }


      /*
       * Sign Out
       */

      case ActionTypes.SIGN_OUT: {
        return {
          ...initialState,
        };
      }

  }

  return state;
}
