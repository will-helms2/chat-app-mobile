import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default class SignUp extends React.Component {

  constructor(props){
    super(props);

    this.state = {firstName: "", last_name: "", email: "", password: ""};
  }

  onSubmit = () => {
    const { email, password } = this.state;
    //const { actions }  = this.props;
    //actions.session.signIn(email, password);
    //submit form to api
  };

  render(){
    return(
      <View>
        <TextInput onChange={(value) => this.setState({firstName: value})} />
        <TextInput onChange={(value) => this.setState({lastName: value})} />
        <TextInput onChange={(value) => this.setState({email: value})} />
        <TextInput onChange={(value) => this.setState({password: value})} />
        <TouchableOpacity onPress={this.onSubmit}>
          <Text>{"Submit"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
