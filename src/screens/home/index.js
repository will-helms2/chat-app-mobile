import React from 'react';
import {View, Text} from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/session';

@connect(mapState, mapActions)
export default class Home extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return(
      <View style={{marginTop: 100}}>
        <Text>Signed in/ this is where team selection/addition will be</Text>
      </View>
    );
  }
}
