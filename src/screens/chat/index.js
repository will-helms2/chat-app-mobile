import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/channel';
import Screen from 'screens';
import Pusher from 'pusher-js/react-native';
import Config from 'config';
import ChatComponent from './modules/chat';
import camelcaseKeys from 'camelcase-keys-deep';

@connect(mapState, mapActions)
class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

    Pusher.logToConsole = true;

    this.pusher = new Pusher(Config.pusher.key, {...Config.pusher, Authorization: `Bearer ${this.props.token}`});

    this.chatChannel = this.pusher.subscribe('chat-channel-' + this.props.navigation.getParam("channelId")); // (2)
    this.chatChannel.bind('pusher:subscription_succeeded', () => { // (3)
      this.chatChannel.bind('message', (data) => { // (6)
        console.log(data);
        this.handleMessage(data.name, data.message);
      });
    });
  }

  componentDidMount(){
    this.props.actions.loadChannel(this.props.navigation.getParam("channelId"));
  }

  handleMessage = (name, message) => {
    message = camelcaseKeys(message);
    this.props.actions.addRemoteMessage(message);
  }

  onSendMessage = (content) => {
    const {text} = content;
    const { navigation, session, actions }  = this.props;
    actions.createMessage({content, channelId: navigation.getParam("channelId"), userId: session.user.id, isFile: false});
  }

  onFileSend = (fileUrl) => {
    const { navigation, session, actions }  = this.props;
    actions.createMessage({content: fileUrl, channelId: navigation.getParam("channelId"), userId: session.user.id, isFile: true, photoUrl: fileUrl});
  }

  render() {
    if(this.props.channel.loading || !this.props.channel.messages){
      return(
        <ActivityIndicator />
      );
    }

    const messages = this.props.channel.messages;

    return (
        <ChatComponent
          messages={messages}
          onSend={this.onSendMessage}
          user={this.props.session.user}
          uploadMessagePhoto={this.props.actions.uploadMessagePhoto}
          uploadMessage={this.props.channel.uploadMessagePhoto}
          onFileSend={this.onFileSend}
        />
    );
  }
}


export default Screen(Chat);
