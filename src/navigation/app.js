
/*
 * App Navigator
 */

import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import SignedOutNavigator from 'navigation/signed-out';
import SignedInNavigator from 'navigation/signed-in';

export default createStackNavigator(
  {
    'signed-out': {
      screen: SignedOutNavigator,
      navigationOptions: stackNavigationOptions(),
    },
    'signed-in': {
      screen: SignedInNavigator,
      navigationOptions: stackNavigationOptions(),
    },
  },
  {
    ...stackNavigatorProps,
    ...Config.navigation.app.navigationOptions,
  },
);
