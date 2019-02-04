import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import style from './style';
import { TextInput } from 'components';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/channel';
import Screen from 'screens';

@connect(mapState, mapActions)
class CreateChannel extends React.Component {

  constructor(props){
    super(props);

    this.state = {name: "", description: "", isDm: false, isPrivate: false, teamId: this.props.team.id};
  }

  componentWillReceiveProps(nextProps){
    const { loadTeam } = nextProps.actions;

    if(this.props.channel.create.loading && nextProps.channel.create.loaded && nextProps.channel.id){
      loadTeam(nextProps.team.id);
      this.props.navigation.navigate("home__team", {teamId: nextProps.team.id});
    }
  }

  onSubmit = () => {
    const { actions }  = this.props;
    actions.createChannel(this.state);
    //submit form to api
  };

  render(){
    const { loading, error, errors = null } = this.props.team.create;

    return(
      <View style={style.container}>
        <View style={style.formContainer}>
            <TextInput autoCapitalize="none" placeholder={"Station Name"} onChangeText={(value) => this.setState({name: value})} />
            <TextInput autoCapitalize="none" placeholder={"Station Description"} onChangeText={(value) => this.setState({description: value})} />
          {loading ?
            <View style={style.buttonContainer}>
              <ActivityIndicator />
            </View> :
            <TouchableOpacity onPress={this.onSubmit} style={style.buttonContainer}>
              <Text style={style.button}>{"Create Channel"}</Text>
            </TouchableOpacity>
          }
          {this.props._renderError(error, loading, errors)}
        </View>
      </View>
    );
  }
}

export default Screen(CreateChannel);
