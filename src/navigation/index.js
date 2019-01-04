/*
 * Navigation Options
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { merge } from 'lodash';
import { Color } from 'styles';
import { Platform } from 'constants';
import NavigationBackButton from 'components/navigation-button/back';
import NavigationCloseButton from 'components/navigation-button/close';
import NavRoutes from 'navigation/routes';

/* Exports */

export NavigationRoutes from 'navigation/routes';

export const stackNavigationOptionsDefault = {

};

export const navigationProps = {
  headerLeftEnabledDefault: true,
  headerRightEnabledDefault: false,
};

/*
 * getScreenTitle
 * @action: return screen title if it's defined, following this priority order: state title > navProp title > screenProp title
 * NOTE: A title must be defined always in one of this options.
 */

function getScreenTitle(
  navigationState = {},
  screenProps = {},
  customOptions = {},
) {
  if (navigationState.params && navigationState.params.title) {
    return navigationState.params.title;
  }

  if (customOptions.title) {
    return customOptions.title;
  }

  if (screenProps.title) {
    return screenProps.title;
  }

  return '';
}

export function stackNavigationOptions(customOptions = {}) {
  return ({ navigation, screenProps }) => {
    const navOptions = merge({}, stackNavigationOptionsDefault, customOptions);
    return {
      ...navOptions,
      title: getScreenTitle(navigation.state, screenProps, customOptions),
    };
  };
}

export function tabNavigationOptions(customOptions = {}) {
  return ({ screenProps }) => {
    //NOTE: tab navigation does not have NavigationProps tab props are in tabNavigatorProps
    const navOptions = merge({}, customOptions);

    return {
      ...navOptions,
      title: customOptions.title || (screenProps && screenProps.title) || '',
    };
  };
}

/*
 * Stack Navigator Default Props
 */

export const stackNavigatorProps = {
  headerMode: 'screen',
  cardStyle: {
    shadowOpacity: 0,
  },
};

/*
 * getCurrentScreen
 * @action: recursive function to get the current screen from navigation state
 */

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];

  if (route.routes) {
    return getCurrentScreen(route);
  }
  return route.routeName;
}
