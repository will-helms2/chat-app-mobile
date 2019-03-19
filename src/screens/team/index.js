import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/team';
import Screen from 'screens';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';

@connect(mapState, mapActions)
class Team extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const { loadTeam } = this.props.actions;
    console.log(this.props);

    loadTeam(this.props.navigation.getParam("teamId"));
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.navigation.getParam("signOut")){
      nextProps.navigation.navigate('teams__teams_list', {signOut: true});
    }
  }

  goToChannel = (channelId, name) => {
    this.props.navigation.navigate('home__channel', {channelId, name});
  };

  openMemberProfile = (userId, firstName, lastName) => {
    this.props.navigation.navigate('home__profile', {userId, name: firstName});
  };

  _renderTeamName = () => {
    const { name } = this.props.team;
    return(
      <View style={style.teamHeader}>
        <Text style={style.teamHeaderText}>{name}</Text>
      </View>
    );
  };

  _renderUser = ({item}) => {
    return(
      <TouchableOpacity
          onPress={() => {this.openMemberProfile(item.id, item.firstName, item.lastName)}}
          style={style.userButton}
      >
        {item.photoUrl ? <Image style={style.userImage} source={{uri: item.photoUrl}}/> : <Icon name="person" size={60} color="black" style={style.userImage} />}
        <Text style={style.userButtonText}>{item.firstName + " " + item.lastName}</Text>
      </TouchableOpacity>
    );
  };

  _keyExtractor = (item, index) => "user-" + item.id;

  _renderUserList = () => {
    return(
      <View style={style.userListContainer}>
        <FlatList
          data={this.props.team.users}
          renderItem={this._renderUser}
          keyExtractor={this._keyExtractor}
          horizontal={true}
        />
      </View>
    );
  };

  _renderChannelHeader(){
    return(
      <View style={style.channelHeader}>
          <Text style={style.channelHeaderText}>{"Stations"}</Text>
      </View>
    );
  }

  _renderChannel = ({item}) => {
    return(
      <TouchableOpacity
          onPress={() => {this.goToChannel(item.id, item.name)}}
          style={style.channelButton}
      >
        {item.isPrivate ? <Icon name="lock" style={style.channelButtonLock} /> : <Icon name="lock-open" style={style.channelButtonLock}/>}
        <Text style={style.channelButtonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  _renderFooter = () => {
    return(
        <TouchableOpacity style={style.channelButtonAdd} onPress={() => {this.props.navigation.navigate("home__create_channel")}}>
          <Icon name="add-circle" size={50} color="black" style={style.channelButtonLock} />
          <Text style={style.channelButtonText}>Add Station</Text>
        </TouchableOpacity>
    );
  };

  _renderChannels = () => {
    return(
      <View style={style.channelsContainer}>
        <FlatList
          data={this.props.team.channels.concat(this.props.team.publicChannels)}
          renderItem={this._renderChannel}
          keyExtractor={this._keyExtractor}
          ListFooterComponent={this._renderFooter}
          contentInset= {{bottom: 60}}
        />
      </View>
    );
  }

  _renderDMsHeader(){
    return(
      <View style={style.channelHeader}>
          <Text style={style.channelHeaderText}>{"Direct Messages"}</Text>
      </View>
    );
  }

  _renderDM = ({item}) => {
    console.log(item);
    return(
      <TouchableOpacity
          onPress={() => {this.goToChannel(item.id, item.users[0].firstName + " " + item.users[0].lastName)}}
          style={style.dmButton}
      >
        <Text style={style.dmButtonText}>{item.users[0].firstName} {item.users[0].lastName}</Text>
      </TouchableOpacity>
    );
  };

  _renderDMs = () => {
    return(
      <View style={style.channelsContainer}>
        <FlatList
          data={this.props.team.directMessages}
          renderItem={this._renderDM}
          keyExtractor={this._keyExtractor}
          contentInset= {{bottom: 60}}
        />
      </View>
    );
  }

  render(){
    if(!this.props.team.loaded){
      return <ActivityIndicator />
    }

    return(
      <View style={style.container}>
        {this._renderTeamName()}
        {this._renderUserList()}
        <View style={style.channelSection}>
          {this._renderChannelHeader()}
          {this._renderChannels()}
        </View>
        <View style={style.dmSection}>
          {this._renderDMsHeader()}
          {this._renderDMs()}
        </View>
      </View>
    );
  }

}

export default Screen(Team);
