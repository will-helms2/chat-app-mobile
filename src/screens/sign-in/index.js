import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import style from './style';
import { TextInput } from 'components';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import Screen from 'screens';

@connect(mapState, mapActions)
class SignIn extends React.Component {

  constructor(props){
    super(props);

    this.state = {email: "", password: ""};
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.session.loaded && nextProps.session.token){
      this.props.navigation.navigate('home');
    }
  }

  onSubmit = () => {
    const { email, password } = this.state;
    const { actions }  = this.props;
    actions.signIn(email, password);
    //submit form to api
  };

  render(){
    const { loading, error, errors = null } = this.props.session;

    return(
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={require('assets/logo/vimbelTitle.png')}
            style={style.logo}
          />
        </View>
        <View style={style.formContainer}>
          <TextInput autoCapitalize="none" placeholder={"email"} onChangeText={(value) => this.setState({email: value})} />
          <TextInput secureTextEntry={true} autoCapitalize="none" placeholder={"password"}  onChangeText={(value) => this.setState({password: value})} />
          {loading ?
            <View style={style.buttonContainer}>
              <ActivityIndicator />
            </View> :
            <TouchableOpacity onPress={this.onSubmit} style={style.buttonContainer}>
              <Text style={style.button}>{"Sign In"}</Text>
            </TouchableOpacity>
          }
          {this.props._renderError(error, loading, errors)}
        </View>
      </View>
    );
  }
}

export default Screen(SignIn);
