import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import style from './style';
import { TextInput } from 'components';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';

@connect(mapState, mapActions)
export default class SignIn extends React.Component {

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
    const { loading } = this.props.session;

    return(
      <View style={style.container}>
        <Text>{"Sign In"}</Text>
        <TextInput autoCapitalize="none" placeholder={"email"} onChangeText={(value) => this.setState({email: value})} />
        <TextInput autoCapitalize="none" placeholder={"password"}  onChangeText={(value) => this.setState({password: value})} />
        <TouchableOpacity onPress={this.onSubmit}>
          <Text>{"Submit"}</Text>
        </TouchableOpacity>
        {loading &&
          <ActivityIndicator />
        }
      </View>
    );
  }
}
