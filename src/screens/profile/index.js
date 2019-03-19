import React from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/profile';
import Screen from 'screens';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from './style';

@connect(mapState, mapActions)
class Profile extends React.Component {

  componentDidMount(){
    this.props.actions.loadProfile(this.props.navigation.getParam("userId"));
  }

  startDM = () => {
    const teamId = this.props.team.id;
    const userId = this.props.profile.user.id;
    const { loadTeam, createDM } = this.props.actions;


    createDM({teamId, userId});
    loadTeam(this.props.team.id);
    this.props.navigation.goBack();
  };

  checkDM = () => {
    const { directMessages } = this.props.team;
    const userId = this.props.profile.user.id;
    let dmstarted = false;
    if(directMessages){
      directMessages.forEach(function(dm){
        if(dm.users[0].id === userId){
          dmstarted = true;
        }
      });
    }

    return dmstarted;

  };

  render(){

    if(!this.props.profile.loaded){
      return(
        <ActivityIndicator />
      );
    }
    const user = this.props.profile.user;

    console.log(user.id, this.props.session.user.id);

    const isUser = (user.id === this.props.session.user.id);
    console.log(isUser);
    console.log(this.checkDM());

    return(
      <View style={style.container}>
        <View style={style.profileContainer}>
          <TouchableOpacity
            disabled={!isUser}
            onPress={() => {this.props.navigation.navigate('home__upload_photo', {userId: user.id, name: this.props.navigation.getParam("name")})}}
          >
          {user.photoUrl ? <Image source={{uri: user.photoUrl}} style={style.profileImage}/> : <Icon name="person" size={80} color="black" />}
          </TouchableOpacity>
          <View style={style.nameContainer}>
            <Text style={style.name}>{user.firstName} {user.lastName}</Text>
          </View>
        </View>
        {(!isUser && !this.checkDM()) &&
        <View style={style.optionsContainer}>
            <TouchableOpacity
                onPress={this.startDM}
                style={style.dmButton}
             >
                <Text style={style.dmText}>Start a Direct Message</Text>
             </TouchableOpacity>
        </View>
      }
      </View>
    );
  }

}

export default Screen(Profile);
