/*
 * App Navigator Container
 */

import React from 'react';
import { View } from 'react-native';
import style from './style';
import AppNavigator from 'navigation/app';

export default class AppNavigatorContainer extends React.Component {

  render() {
    return (
      <View style={style.container}>
        <AppNavigator />
      </View>
    );
  }
}
