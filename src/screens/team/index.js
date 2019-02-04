import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
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

  openMemberProfile = (userId) => {
    //this.props.navigation.navigate();
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
          onPress={() => {this.openMemberProfile(item.id)}}
          style={style.userButton}
      >
        {item.thumbUrl ? " " : <Icon name="person" size={40} color="black" style={style.userButtonText} />}
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
        {item.isPrivate ? <Icon /> : <Text style={style.channelButtonText}>{"#"}</Text>}
        <Text style={style.channelButtonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  _renderFooter = () => {
    return(
      <View style={style.createChannelContainer}>
        <TouchableOpacity style={style.createChannelButton} onPress={() => {this.props.navigation.navigate("home__create_channel")}}>
          <Icon name="add-circle" size={50} color="black" style={style.createChannelText} />
        </TouchableOpacity>
      </View>
    );
  };

  _renderChannels = () => {
    return(
      <View style={style.channelsContainer}>
        <FlatList
          data={this.props.team.channels}
          renderItem={this._renderChannel}
          keyExtractor={this._keyExtractor}
          ListFooterComponent={this._renderFooter}
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
        {this._renderChannelHeader()}
        {this._renderChannels()}
      </View>
    );
  }

}

export default Screen(Team);
