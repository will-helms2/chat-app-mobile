import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import style from './style';
import Screen from 'screens';

class Opening extends React.Component {

  constructor(props){
    super(props);

  }

  navigateToSignIn = () => {
    this.props.navigation.navigate('signed-out__sign-in');
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('signed-out__sign-up');
  }

  render(){
    return(
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={require('assets/logo/vimbelTitle.png')}
            style={style.logo}
          />
        </View>
        <View style={ style.buttonsContainer }>
          <TouchableOpacity
            onPress={this.navigateToSignUp}
            style={style.signUpButtonContainer}
          >
            <Text style={style.button}>
              {'Create an Account'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.navigateToSignIn}
            style={style.signInButtonContainer}
          >
            <Text style={style.button}>
              {'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Screen(Opening);
