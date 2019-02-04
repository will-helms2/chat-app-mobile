/*
 * App
 */

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './src/store';
import AppNavigatorContainer from './src/navigator-container/app';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigatorContainer />
      </Provider>
    );
  }
}
