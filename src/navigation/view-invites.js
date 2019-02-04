/*
 * View Invites Navigator
 */

import React from 'react';
import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import TeamInvitations from 'screens/team-invitations';
import { MainDrawerButton, ChannelDrawerButton } from 'components';

/* eslint-disable react/prop-types */
export default createStackNavigator(
  {
    'view_invites__home': {
      screen: TeamInvitations,
      navigationOptions: ({ navigation }) => ({
        headerLeft : <MainDrawerButton navigation={navigation} />,
        title: 'Team Invites',
      }),
    },
    },
    {
      ...Config.navigation.createTeam.navigationOptions,
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: '#8A2BE2',
        },
        headerTintColor: "white",
        headerBackTitle: "Stations",
      }
    }
);
