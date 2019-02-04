
/*
 * Home Navigator
 */

import React from 'react';
import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import Team from 'screens/team';
import Channel from 'navigation/channel';
import CreateChannel from 'screens/create-channel';
import { MainDrawerButton, ChannelDrawerButton } from 'components';

/* eslint-disable react/prop-types */
export default createStackNavigator(
  {
    'home__team': {
      screen: Team,
      navigationOptions: ({ navigation }) => ({
        headerLeft : <MainDrawerButton navigation={navigation} />,
        title: 'Vimbel',
      }),
    },
    'home__channel': {
      screen: Channel,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}`,
        headerRight : <ChannelDrawerButton navigation={navigation} />,
      }),
      },
    'home__create_channel': {
      screen: CreateChannel,
      navigationOptions: {
        title: 'Create a Station',
      },
    },
  },
    {
      ...Config.navigation.home.navigationOptions,
      defaultNavigationOptions:{
        headerStyle: {
          backgroundColor: '#8A2BE2',
        },
        headerTintColor: "white",
        headerBackTitle: "Stations",
      }
    }
);
