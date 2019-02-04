import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import style from './style';
import { TextInput } from 'components';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import Screen from 'screens';

@connect(mapState, mapActions)
class SignUp extends React.Component {

  constructor(props){
    super(props);

    this.state = {email: "", password: "", firstName: "", lastName:"", username: "", confirmPassword: ""};
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps);
    if(nextProps.session.loaded && nextProps.session.token){
      this.props.navigation.navigate('teams__teams_list');
    }
  }

  onSubmit = () => {
    const { firstName, lastName, email, password, username, passwordConfirmation } = this.state;
    const { actions }  = this.props;
    actions.signUp({firstName, lastName, email, password, passwordConfirmation, username});
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
          <TextInput autoCapitalize="none" placeholder={"first name"} onChangeText={(value) => this.setState({firstName: value})} />
            <TextInput autoCapitalize="none" placeholder={"last name"} onChangeText={(value) => this.setState({lastName: value})} />
          <TextInput autoCapitalize="none" placeholder={"email"} onChangeText={(value) => this.setState({email: value})} />
          <TextInput secureTextEntry={true} autoCapitalize="none" placeholder={"password"}  onChangeText={(value) => this.setState({password: value})} />
          <TextInput secureTextEntry={true} autoCapitalize="none" placeholder={"confirm password"}  onChangeText={(value) => this.setState({passwordConfirmation: value})} />
        <TextInput autoCapitalize="none" placeholder={"username"} onChangeText={(value) => this.setState({username: value})} />
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

export default Screen(SignUp);
