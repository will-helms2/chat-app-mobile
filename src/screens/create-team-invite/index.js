import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import style from './style';
import { TextInput } from 'components';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/invite';
import Screen from 'screens';

@connect(mapState, mapActions)
class CreateTeamInvite extends React.Component {

  constructor(props){
    super(props);

    this.state = {email: "", teamId: this.props.team.id};
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.invite.create.loaded){
      console.log(this.props.team.id);
      this.props.navigation.navigate('main_drawer__home', {teamId: this.props.team.id});
    }
  }

  onSubmit = () => {
    const { actions }  = this.props;
    actions.createInvite(this.state);
    //submit form to api
  };

  render(){
    const { loading, error, errors = null } = this.props.invite.create;

    return(
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={require('assets/logo/vimbelTitle.png')}
            style={style.logo}
          />
        </View>
        <View style={style.formContainer}>
            <TextInput autoCapitalize="none" placeholder={"Invitee Email"} onChangeText={(value) => this.setState({email: value})} />
          {loading ?
            <View style={style.buttonContainer}>
              <ActivityIndicator />
            </View> :
            <View>
              <TouchableOpacity onPress={this.onSubmit} style={style.buttonContainer}>
                <Text style={style.button}>{"Send Invite"}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} style={[style.buttonContainer, {backgroundColor: "red", marginTop: 10}]}>
                <Text style={style.button}>{"Cancel"}</Text>
              </TouchableOpacity>
            </View>
          }
          {this.props._renderError(error, loading, errors)}
        </View>
      </View>
    );
  }
}

export default Screen(CreateTeamInvite);
