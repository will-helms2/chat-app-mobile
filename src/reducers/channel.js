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
  refresh: initialState,
  create: initialLoadState,
};

export default function channel(state = initialState, action = {}) {
  const { payload = {} } = action;

  switch (action.type) {
    case ActionTypes.CHANNEL_LOAD__INIT: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case ActionTypes.CHANNEL_LOAD__SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        loaded: true,
      };
    }
    case ActionTypes.CHANNEL_LOAD__ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error,
        errors: payload.errors,
      };
    }

      case ActionTypes.CHANNEL_CREATE__INIT: {
        return {
          ...state,
          create: {
            ...initialState,
            loading: true,
          }
        };
      }
      case ActionTypes.CHANNEL_CREATE__SUCCESS: {
        return {
          ...state,
          ...payload,
          create: {
            ...state.create,
            loading: false,
            loaded: true,
          }
        };
      }
      case ActionTypes.CHANNEL_CREATE__ERROR: {
        return {
          ...state,
          create: {
            ...state.create,
            loading: false,
            error: payload.error,
            errors: payload.errors,
          }
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
