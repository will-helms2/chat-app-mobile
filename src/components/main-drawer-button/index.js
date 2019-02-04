import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

export default MainDrawerButton = (props) => {
    return(
      <TouchableOpacity
        onPress={props.navigation.toggleMainDrawer}
        style={{
          paddingLeft: 20,
        }}
      >
        <Icon name="menu" size={25} color="white" />
      </TouchableOpacity>
    );
}
