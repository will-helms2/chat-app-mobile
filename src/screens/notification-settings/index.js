import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';
import Screen from 'screens';

@connect(mapState, mapActions)
class NotificationSettings extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return(
      <View>
        <Text>{"Work in Progress"}</Text>
      </View>
    );
  }

}

export default Screen(NotificationSettings);
