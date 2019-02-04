import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { DrawerItems, SafeAreaView  } from 'react-navigation';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/channel';

@connect(mapState, mapActions)
export default class ChannelDrawerContent extends React.Component {

  _renderChannelName = () => {
    return(
      <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('')}}
          style={style.userSection}
      >
        <Text style={style.userText}>
        </Text>
      </TouchableOpacity>
    );
  }

  _renderViewFiles = () => {
    return(
      <TouchableOpacity
        onPress={() => {this.props.navigation.navigate('channel__file_viewer')}}
        style={[style.teamButton, {marginTop: 10}]}
      >
        <Text style={style.buttonText}>{"View All Files"}</Text>
      </TouchableOpacity>
    );
  }

  _renderSettings(){
    return(
      <View style={style.settingsContainer}>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('channel__settings')}}
          style={style.notifsButton}
        >
          <Text style={[style.buttonText, {paddingLeft: 5}]}>{"Station Settings"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderDeleteChannel(){
    const { signOut } = this.props.actions;
    return(
      <View style={style.signOutContainer}>
        <TouchableOpacity
          style={style.signOutButton}
        >
          <Text style={style.signOutText}>{"Delete Channel"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render(){

    return(
      <View style={{flex:1}}>
      <ScrollView>
        <SafeAreaView>
          {this._renderChannelName()}

          <View style={style.teamsContainer}>
            {this._renderViewFiles()}
            {/*this._renderMeetings()*/}
          </View>
          {this._renderSettings()}
          {/*<DrawerItems {...props} />*/}
        </SafeAreaView>
      </ScrollView>
      {this._renderDeleteChannel()}
      </View>
    );
  }
};
