import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItems, SafeAreaView, NavigationActions  } from 'react-navigation';

@connect(mapState, mapActions)
export default class MainContentComponent extends React.Component {

  componentWillReceiveProps(nextProps){

  }

  goToTeam = (teamId) => {
    console.log(this.props, teamId);
    this.props.navigation.navigate({routeName: 'home__team', params: {teamId}, key: "team-" +teamId});
  };

  signOut = () => {
    console.log(this.props);
    const teamId = this.props.team.id;
    this.props.actions.signOut();
    this.props.navigation.navigate('signed-out__opening');
  }

  _renderUser = (user) => {
    return(
      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('')}}
          style={style.userSection}
      >
        <Text style={style.userText}>
          {user.firstName + " " + user.lastName}
        </Text>
      </TouchableOpacity>
    );
  }

  _renderTeam = (team, index) => {
    return(
      <TouchableOpacity
        onPress={() => {this.goToTeam(team.id)}}
        key={index}
        style={style.teamButton}
      >
        <Text style={style.buttonText}>{team.name}</Text>
      </TouchableOpacity>
    );

  };

  _renderSettings(){
    return(
      <View style={style.settingsContainer}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('main_drawer__notifications')}}
          style={style.notifsButton}
        >
          <Icon name="notifications" size={20} color="white" />
          <Text style={[style.buttonText, {paddingLeft: 5}]}>{"Push Notifications"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('main_drawer__create_team_invite')}}
          style={style.notifsButton}
        >
          <Text style={[style.buttonText, {paddingLeft: 5}]}>{"Create Team Invite"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('main_drawer__view_invites')}}
          style={style.notifsButton}
        >
          <Text style={[style.buttonText, {paddingLeft: 5}]}>{"View Team Invites"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderSignOut(){
    return(
      <View style={style.signOutContainer}>
        <TouchableOpacity
          onPress={this.signOut}
          style={style.signOutButton}
        >
          <Text style={style.signOutText}>{"Sign Out"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    const { user } = this.props.session;

    return(
      <View style={{flex:1}}>
      <ScrollView>
        <SafeAreaView>
          {this._renderUser(user)}
          <View style={style.teamTitleContainer}>
            <Text style={style.teamTitle}>{"Teams"}</Text>
          </View>
          <View style={style.teamsContainer}>
            {user.teams.map(this._renderTeam)}
          </View>
          {this._renderSettings()}
          {/*<DrawerItems {...props} />*/}
        </SafeAreaView>
      </ScrollView>
      {this._renderSignOut()}
      </View>
    );
  }
};
