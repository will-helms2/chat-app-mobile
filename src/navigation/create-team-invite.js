/*
 * Home Navigator
 */

import React from 'react';
import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import CreateTeamInvite from 'screens/create-team-invite';
import { MainDrawerButton, ChannelDrawerButton } from 'components';

/* eslint-disable react/prop-types */
export default createStackNavigator(
  {
    'create_team_invite__home': {
      screen: CreateTeamInvite,
      navigationOptions: ({ navigation }) => ({
        headerLeft : <MainDrawerButton navigation={navigation} />,
        title: 'Create a Team Invite',
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
