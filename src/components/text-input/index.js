import React from 'react';
import {View, TextInput as NativeTextInput } from 'react-native'
import style from './style';

export default class TextInput extends React.Component {
  render(){
    return(
      <View style={style.container}>
        <NativeTextInput {...this.props} style={style.textInput} />
      </View>
    );
  }
}
