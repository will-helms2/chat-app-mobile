/*
 * Signed Out Navigator
 */

import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import SignIn from 'screens/sign-in';
import SignUp from 'screens/sign-up';

export default createStackNavigator(
  {
    'signed-out__sign-in': {
      screen: SignIn,
      navigationOptions: stackNavigationOptions({
        header: null,
      }),
    },
    'signed-out__sign-up': {
      screen: SignUp,
      navigationOptions: stackNavigationOptions({
        title: "SIGN UP"
        }
      ),
    },
  },
  {
    ...stackNavigatorProps,
    ...Config.navigation.signedOut.navigationOptions,
  },
);
