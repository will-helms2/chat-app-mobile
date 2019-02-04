import React from 'react';
import { View, Image, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import style from './style';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import Screen from 'screens';

@connect(mapState, mapActions)
class Opening extends React.Component {

  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps){
    const nextLoaded = nextProps.session.validateToken.loaded;
    const { loading } = this.props.session.validateToken;

    if(loading && nextLoaded && nextProps.session.user){
      this.props.navigation.navigate('teams__teams_list');
    }

    console.log(this.props);

    // if(nextProps.navigation.getParams("signOut")){
    //   const signOut = nextProps.navigation.getParams("signOut");
    //   signOut();
    // }

  }

  componentDidMount(){
    console.log()
    const { validate } = this.props.actions;

    validate();
  }

  navigateToSignIn = () => {
    this.props.navigation.navigate('signed-out__sign-in');
  }

  navigateToSignUp = () => {
    this.props.navigation.navigate('signed-out__sign-up');
  }

  render(){
    const { loading } = this.props.session.validateToken;

    if(loading){
      return(
        <View style={style.container}>
          <ActivityIndicator />
        </View>
      );
    }


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
