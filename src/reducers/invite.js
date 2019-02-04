/*
 * Team Invite Reducer
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
  refresh: initialLoadState,
  create: initialLoadState,
  approval: initialLoadState,
};

export default function invite(state = initialState, action = {}) {
  const { payload = {} } = action;

  switch (action.type) {
    case ActionTypes.INVITE_LOAD__INIT: {
      return {
        ...initialState,
        loading: true,
      };
    }
    case ActionTypes.INVITE_LOAD__SUCCESS: {
      return {
        ...state,
        invites: payload,
        loading: false,
        loaded: true,
      };
    }
    case ActionTypes.INVITE_LOAD__ERROR: {
      return {
        ...state,
        loading: false,
        error: payload.error,
        errors: payload.errors,
      };
    }
      case ActionTypes.INVITE_CREATE__INIT: {
        return {
          ...state,
          create: {
            ...initialLoadState,
            loading: true,
          }
        };
      }
      case ActionTypes.INVITE_CREATE__SUCCESS: {
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
      case ActionTypes.INVITE_CREATE__ERROR: {
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


        case ActionTypes.INVITE_ACCEPT__INIT: {
          return {
            ...state,
            approval: {
              ...initialLoadState,
              loading: true,
            }
          };
        }
        case ActionTypes.INVITE_ACCEPT__SUCCESS: {
          return {
            ...state,
            approval: {
              ...state.approval,
              ...payload,
              loading: false,
              loaded: true,
              approved: true,
            }
          };
        }
        case ActionTypes.INVITE_ACCEPT__ERROR: {
          return {
            ...state,
            approval: {
              ...state.approval,
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
