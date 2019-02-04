
/*
 * App Navigator
 */

import Config from 'config';
import { createSwitchNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import SignedOutNavigator from 'navigation/signed-out';
import SignedInNavigator from 'navigation/signed-in';

export default createSwitchNavigator(
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
  Config.navigation.app.navigationOptions
);
