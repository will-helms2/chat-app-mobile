/*
 * Signed Out Navigator
 */

import Config from 'config';
import { createStackNavigator } from 'react-navigation';
import { stackNavigationOptions, stackNavigatorProps } from 'navigation';
import TeamsList from 'screens/teams-list';
import TeamInvitations from 'screens/team-invitations';
import CreateTeam from 'screens/create-team';

export default createStackNavigator(
  {
    'teams__teams_list': {
      screen: TeamsList,
      navigationOptions: {
        title: 'Vimbel',
        headerStyle: {
          backgroundColor: '#8A2BE2',
        },
        headerTintColor: "white",

      },
    },
    'teams__invitations': {
      screen: TeamInvitations,
      navigationOptions: {
        title: 'Team Invitations',
        headerStyle: {
          backgroundColor: '#8A2BE2',
        },
        headerTintColor: "white",

      },
    },
    'teams__create_team': {
      screen: CreateTeam,
      navigationOptions: {
        title: 'Create a Team',
        headerStyle: {
          backgroundColor: '#8A2BE2',
        },
        headerTintColor: "white",
      },
    },
  },
  {
    headerBackTitleVisible: false,
    ...Config.navigation.teams.navigationOptions
  }
);
