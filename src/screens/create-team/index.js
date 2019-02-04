import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import style from './style';
import { TextInput } from 'components';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/team';
import Screen from 'screens';

@connect(mapState, mapActions)
class CreateTeam extends React.Component {

  constructor(props){
    super(props);

    this.state = {name: "", string: ""};
  }

  componentWillReceiveProps(nextProps){
    const { validate } = nextProps.actions;

    if(nextProps.team.create.loaded && nextProps.team.id){
      validate();
      this.props.navigation.navigate("home__team", {teamId: nextProps.team.id});
    }
  }

  onSubmit = () => {
    const { actions }  = this.props;
    actions.createTeam(this.state);
    //submit form to api
  };

  render(){
    const { loading, error, errors = null } = this.props.team.create;

    return(
      <View style={style.container}>
        <View style={style.logoContainer}>
          <Image
            source={require('assets/logo/vimbelTitle.png')}
            style={style.logo}
          />
        </View>
        <View style={style.formContainer}>
            <TextInput autoCapitalize="none" placeholder={"Team Name"} onChangeText={(value) => this.setState({name: value})} />
            <TextInput autoCapitalize="none" placeholder={"Team Slug"} onChangeText={(value) => this.setState({string: value})} />
          {loading ?
            <View style={style.buttonContainer}>
              <ActivityIndicator />
            </View> :
            <TouchableOpacity onPress={this.onSubmit} style={style.buttonContainer}>
              <Text style={style.button}>{"Create Team"}</Text>
            </TouchableOpacity>
          }
          {this.props._renderError(error, loading, errors)}
        </View>
      </View>
    );
  }
}

export default Screen(CreateTeam);
