/*
 * Config
 */

import { merge } from 'lodash';
import { NavigationRoutes } from 'navigation';
import Secrets from './secrets.local';

const Config = {
  baseUrl: 'https://vimbel-test.herokuapp.com',
  apiPath: '/api',
  defaultEmail: '',
  defaultPassword: '',
  debug: {
    //IMPORTANT: Declare debug attributes in Secrets file only
    clearAll: false,
    clearSession: false,
  },
  pusher: {
    appId:"707133",
    key:"c656fbc086db6214bfcd",
    secret:"e8a58f301c2585341bee",
    cluster:"mt1",
    encrypted:true,
    authEndpoint:"http://127.0.0.1:8000/broadcasting/auth"
  },
  navigation: {
   app: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.SIGNED_OUT,
       headerMode: 'none',
     },
   },
   signedIn: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.SIGNED_IN__TEAMS,
       mode: 'modal',
     },
   },
   signedOut: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.SIGNED_OUT__OPENING,
     },
   },
   teams: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.TEAMS__TEAMS_LIST,
     },
   },
   mainDrawer: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.MAIN_DRAWER__HOME,
     },
   },
   home: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.HOME__TEAM,
     },
   },
   createTeam: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.CREATE_TEAM_INVITE__HOME,
     },
   },
 },
};

export default merge(Config, Secrets);
