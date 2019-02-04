import React from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/invite';
import Screen from 'screens';
import style from './style';

@connect(mapState, mapActions)
class TeamInvitations extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const { loadInvites } = this.props.actions;

    loadInvites();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.invite.approval.loaded && nextProps.invite.approval.approved){
      nextProps.navigation.navigate('home__team', {teamId: nextProps.invite.approval.team.id});
      nextProps.actions.validate();
    }
  }

  acceptInvitation = (teamId) => {
    this.props.actions.acceptInvitation(teamId)
  };

  declineInvitation = (invitaionId) => {

  };

  _keyExtractor = (item, index) => "user-" + item.id;

  _renderInvitations = ({item}) => {
    return(
      <View style={style.invitationContainer}>
        <View style={style.inviteTextContainer}>
          <Text style={style.teamNameText}>{item.team.name}</Text>
          <Text style={style.fromText}>{"From: " + item.ownedUser.firstName + " " + item.ownedUser.lastName + `(${item.ownedUser.email})`}</Text>
        </View>
        <View style={style.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {this.acceptInvitation(item.id)}}
            style={style.declineButton}
          >
            <Text style={style.declineText}>{"Decline"}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {this.acceptInvitation(item.team.id)}}
            style={style.acceptButton}
          >
            <Text style={style.acceptText}>{"Accept"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render(){

    if(!this.props.invite.loaded){
      return <ActivityIndicator />;
    }

    return(
      <View>
        <FlatList
          data={this.props.invite.invites}
          renderItem={this._renderInvitations}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

}

export default Screen(TeamInvitations);
