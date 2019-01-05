
/*
 * Home Navigator
 */

import React from 'react';
import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import Home from '../screens/home';


/* eslint-disable react/prop-types */
export default createStackNavigator(
  {
    'home': {
      screen: Home,
      navigationOptions: stackNavigationOptions({
        title: 'Home',
        }),
      },
    },
      {
        ...stackNavigatorProps,
        ...Config.navigation.home.navigationOptions,
      }
);
