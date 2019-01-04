
/*
 * Signed In Navigator
 */

import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import HomeNavigator from 'navigation/home';

export default createStackNavigator(
  {
    'signed-in__home': {
      screen: HomeNavigator,
      navigationOptions: stackNavigationOptions({
        headerLeftEnabled: false,
        header: null,
      }),
    },
  },
  {
    ...stackNavigatorProps,
    ...Config.navigation.signedIn.navigationOptions,
  },
);
