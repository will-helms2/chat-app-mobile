
/*
 * Main Drawer Navigator
 */

import Config from 'config';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import Chat from 'screens/chat';
import FileViewer from 'screens/file-viewer';
import ChannelSettings from 'screens/channel-settings';
import CreateChannel from 'screens/create-channel';
import ChannelDrawerContent from 'navigation/drawer/channel-drawer-content';

export default createDrawerNavigator({

      'channel__chat': {
        screen: Chat,
      },
      'channel__file_viewer': {
        screen: FileViewer,
      },
      'channel__settings': {
        screen: ChannelSettings,
      },
      'channel__create_channel': {
        screen: CreateChannel,
      }
    },
    {
      contentComponent: ChannelDrawerContent,
      drawerPosition: "right",
      getCustomActionCreators: (route, stateKey) => {
        return {
          toggleChannelDrawer: () => DrawerActions.toggleDrawer({ key: stateKey }),
        };
      },
      ...Config.navigation.mainDrawer.navigationOptions,
    }
);
