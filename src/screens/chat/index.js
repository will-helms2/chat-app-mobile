import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/channel';
import Screen from 'screens';

@connect(mapState, mapActions)
class Chat extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const { loadChannel } = this.props.actions;

    loadChannel(this.props.navigation.getParam("channelId"));
  }

  createMessage = () => {

  };

  openCameraRoll = () => {

  };

  openCamera = () => {

  };

  _renderMessages = () => {

  };

  _renderChatField = () => {

  };

  render(){
    return(
      <View>
        <Text>{"the chat"}</Text>
      </View>
    );
  }

}

export default Screen(Chat);
