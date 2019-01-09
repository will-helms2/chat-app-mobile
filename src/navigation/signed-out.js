/*
 * Signed Out Navigator
 */

import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import SignIn from 'screens/sign-in';
import SignUp from 'screens/sign-up';
import Opening from 'screens/opening';

export default createStackNavigator(
  {
    'signed-out__opening': {
      screen: Opening,
      navigationOptions: stackNavigationOptions({
        header: null,
      }),
    },
    'signed-out__sign-in': {
      screen: SignIn,
      navigationOptions: stackNavigationOptions({
        headerStyle: {
          borderBottomWidth: 0,
        },
      }),
    },
    'signed-out__sign-up': {
      screen: SignUp,
      navigationOptions: stackNavigationOptions(),
    },
  },
  {
    ...stackNavigatorProps,
    ...Config.navigation.signedOut.navigationOptions,
  },
);
