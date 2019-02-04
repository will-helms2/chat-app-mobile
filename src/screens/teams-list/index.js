import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import Screen from 'screens';
import style from './style';

@connect(mapState, mapActions)
class TeamsList extends React.Component {

  constructor(props){
    super(props);

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.navigation.getParam("signOut")){
      console.log(nextProps);
      nextProps.actions.signOut();
      nextProps.navigation.navigate('signed-out', {signOut: true});
    }
  }

  navigateToHome(teamId){
    this.props.navigation.navigate("home__team", {teamId: teamId});
  };

  openCreateTeam = () => {
    this.props.navigation.navigate("teams__create_team");
  }

  openTeamInvitations = () => {
    this.props.navigation.navigate("teams__invitations");
  }

  _renderCreateTeamButton = () => {
    return(
      <TouchableOpacity
        onPress={this.openCreateTeam}
        style={style.createTeamButton}
      >
          <Text style={style.createTeamText}>{"Create a Team"}</Text>
      </TouchableOpacity>
    );
  }

  _renderInvitesButton = () => {
    const { invites } = this.props.session.user;
    return(
      <TouchableOpacity
        onPress={this.openTeamInvitations}
        style={style.invitesButton}
      >
          <Text style={style.createTeamText}>{`Current Invites - ${invites.length}`}</Text>
      </TouchableOpacity>
    );
  }

  _renderTeam = (team, index) => {
    return(
      <TouchableOpacity
        key={index}
        onPress={() => {this.navigateToHome(team.id)}}
        style={style.teamButton}
      >
          <Text style={style.teamText}>{team.name}</Text>
      </TouchableOpacity>
    );
  }

  render(){

    if(this.props.session.validateToken.loading){
      return(
        <ActivityIndicator />
      );
    }

    const { teams } = this.props.session.user;

    return(
      <View style={style.container}>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>{"Teams"}</Text>
        </View>
        {teams.length === 0 &&
          <View>
            <Text>{"You don't currently have any teams. Create one?"}</Text>
          </View>
        }
        {teams.map(this._renderTeam)}
        <View style={style.buttonsContainer}>
          {this._renderInvitesButton()}
          {this._renderCreateTeamButton()}
        </View>
      </View>
    );
  }

}

export default Screen(TeamsList);
