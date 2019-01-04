/*
 * Config
 */

import { merge } from 'lodash';
import { NavigationRoutes } from 'navigation';
import Secrets from './secrets.local';

const Config = {
  baseUrl: 'https://www.vimbel.com',
  apiPath: '/api',
  defaultEmail: '',
  defaultPassword: '',
  debug: {
    //IMPORTANT: Declare debug attributes in Secrets file only
    clearAll: false,
    clearSession: false,
    clearOnboarding: false,
  },
  navigation: {
   app: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.SIGNED_OUT,
       headerMode: 'none',
     },
   },
   home: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.HOME,
       headerMode: 'none',
     },
   },
   signedIn: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.SIGNED_IN__HOME,
       mode: 'modal',
     },
   },
   signedOut: {
     navigationOptions: {
       initialRouteName: NavigationRoutes.SIGNED_OUT__SIGN_IN,
     },
   },
 },
};

export default merge(Config, Secrets);
