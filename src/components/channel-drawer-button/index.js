import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

export default ChannelDrawerButton = (props) => {
    return(
      <TouchableOpacity
        onPress={props.navigation.toggleChannelDrawer}
        style={{
          paddingRight: 10,
        }}
      >
        <Icon name="more-vert" size={25} color="white" />
      </TouchableOpacity>
    );
}
