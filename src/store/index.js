/*
 * Store
 */

import {
  compose,
  applyMiddleware,
  createStore,
  bindActionCreators,
} from 'redux';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reduce } from 'lodash';

/* eslint-disable */
const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;
/* eslint-enable */

export function configureStore(initialState = {}) {
  return createStore(
    combineReducers(),
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
}
