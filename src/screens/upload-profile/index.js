import React from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { mapState, mapActions } from 'store/profile';
import Screen from 'screens';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

@connect(mapState, mapActions)
class UploadProfile extends React.Component {

  constructor(props){
    super(props);

    this.state = {avatarSource: ""};
  }

  onUploadButton = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  onSave = () => {
    //upload photo
  };

  render(){
    const user = this.props.profile.user;

    return(
      <View>
        <View>
            {user.photoUrl ? <Image source={{uri: user.photoUrl}} style={style.profileImage}/> : <Icon name="person" size={100} color="black" />}
        </View>

        <TouchableOpacity
          onPress={this.onUploadButton}
        >
          <Text>{"Change Profile Photo"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onSave}>
          <Text>{"Save"}</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

export default Screen(UploadProfile);
