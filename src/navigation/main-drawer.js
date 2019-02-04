
/*
 * Main Drawer Navigator
 */

import Config from 'config';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import HomeNavigator from 'navigation/home';
import NotificationSettings from 'screens/notification-settings';
import AccountSettings from 'screens/account-settings';
import MainDrawerContent from 'navigation/drawer/main-drawer-content';
import CreateTeamInvite from 'navigation/create-team-invite';
import ViewInvites from 'navigation/view-invites';


export default createDrawerNavigator({
      'main_drawer__home': {
        screen: HomeNavigator,
      },
      'main_drawer__notifications': {
        screen: NotificationSettings,
      },
      'main_drawer__account': {
        screen: AccountSettings,
      },
      'main_drawer__create_team_invite':{
        screen: CreateTeamInvite
      },
      'main_drawer__view_invites':{
        screen: ViewInvites
      },
    },
    {
      contentComponent: MainDrawerContent,
      getCustomActionCreators: (route, stateKey) => {
        return {
          toggleMainDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
        };
      },
      ...Config.navigation.mainDrawer.navigationOptions
    }
);
