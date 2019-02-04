import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import Screen from 'screens';

@connect(mapState, mapActions)
class ChannelSettings extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    //const { loadMessages } from this.props.actions;

    //loadMessages()
  }

  render(){
    return(
      <View>
        <Text>{"the station settings"}</Text>
      </View>
    );
  }

}

export default Screen(ChannelSettings);
