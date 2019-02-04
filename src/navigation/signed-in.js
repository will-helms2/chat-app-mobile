
/*
 * Signed In Navigator
 */

import Config from 'config';
import { createSwitchNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import DrawerNavigator from 'navigation/main-drawer';
import TeamsNavigator from 'navigation/teams';

export default createSwitchNavigator({

      'signed-in__teams': {
        screen: TeamsNavigator,
      },
      'signed-in__drawer': {
        screen: DrawerNavigator,
      },
    },
  Config.navigation.signedIn.navigationOptions
);
