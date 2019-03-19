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
  sendMessage: initialLoadState,
  uploadMessagePhoto: {
    ...initialLoadState,
    fileUrl: "",
  }
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
      case ActionTypes.CHANNEL_ADD_REMOTE_MESSAGE: {
        if(state.messages.length > 1){
          console.log(payload.id, state.messages[state.messages.length - 1].id)
          if(payload.id !== state.messages[state.messages.length - 1].id){
            return {
              ...state,
              messages: [payload, ...state.messages]
            };
          }else{
            return {
              ...state
            };
          }
        }else{
          return {
            ...state,
            messages: [payload, ...state.messages]
          };
        }
      }

      case ActionTypes.MESSAGE_CREATE__INIT: {
        return {
          ...state,
          sendMessage: {
            ...initialState,
            loading: true,
          }
        };
      }
      case ActionTypes.MESSAGE_CREATE__SUCCESS: {
        return {
          ...state,
          sendMessage: {
            ...state.sendMessage,
            loading: false,
            loaded: true,
          }
        };
      }
      case ActionTypes.MESSAGE_CREATE__ERROR: {
        return {
          ...state,
          sendMessage: {
            ...state.sendMessage,
            loading: false,
            error: payload.error,
            errors: payload.errors,
          }
        };
      }
      case ActionTypes.CHANNEL_CREATE_DM__INIT: {
        return {
          ...state,
          create: {
            ...initialState,
            loading: true,
          }
        };
      }
      case ActionTypes.CHANNEL_CREATE_DM__SUCCESS: {
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
      case ActionTypes.CHANNEL_CREATE_DM__ERROR: {
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
      case ActionTypes.UPLOAD_MESSAGE_PHOTO__INIT: {
        return {
          ...state,
          uploadMessagePhoto: {
            ...initialState,
            loading: true,
          }
        };
      }
      case ActionTypes.UPLOAD_MESSAGE_PHOTO__SUCCESS: {
        return {
          ...state,
          uploadMessagePhoto: {
            ...state.uploadMessagePhoto,
            ...payload,
            loading: false,
            loaded: true,
          }
        };
      }
      case ActionTypes.CHANNEL_CREATE_PHOTO__ERROR: {
        return {
          ...state,
          uploadMessagePhoto: {
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
