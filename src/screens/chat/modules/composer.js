import React from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import RNHeicConverter from 'react-native-heic-converter';

export default class Composer extends React.Component {
  constructor(props){
      super(props);

      this.state = {message: "", photoSource: null, photo: null};
  }

  componentWillReceiveProps(nextProps){
    const {loaded, fileUrl} = nextProps.uploadMessage;
    const {loading} = this.props.uploadMessage;

    if(loaded && loading){
      console.log("image uploaded!");
      nextProps.onFileSend(fileUrl);
      this.setState({photoSource: null});
    }

  }

  onPress = () => {
    const { onSend, uploadMessagePhoto } = this.props;
    const { message, photoSource, photo } = this.state;

    if (message && !photoSource) {
        onSend(message);

        this.setState({
          message: "",
        });
    }else if(photoSource){
      uploadMessagePhoto(photo);
    }
  }

    openCameraRoll = () =>{
      const options = {
        title: 'Select Photo',
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
          // let photo = response;
          //     RNHeicConverter
          //         .convert({ // options
          //             path: response.path,
          //         })
          //         .then((result) => {
          //              // { success: true, path: "path/to/jpg", error, base64, }
          //              if(result.success){
          //                photo = {data: result.base64, path: result.path, fileName: "react-native-photo.jpg" }
          //              }
          //     });

          console.log(response)
          const photo = {
            ...response,
            fileName: "jpg",
          }

          this.setState({
            photoSource: source,
            photo,
          });
        }
      });
    }


  render(){
    const message = this.state.message;

    return(
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            position: "relative",
          }}
        >
          <TouchableOpacity
              onPress={this.openCameraRoll}
              style={{justifyContent: "center", alignItems: "center", paddingLeft: 5}}
          >
            <Icon name={"camera-alt"} size={25} color={"black"} />
          </TouchableOpacity>
          {this.state.photoSource ?
            <View
              style={{
                flex: 1,
                maxHeight: 100,
                minHeight: 40,
                paddingTop: 10,
                paddingBottom: 10,
                paddingHorizontal: 10,
                marginVertical: 5,
                marginLeft: 10,
                justifyContent: "flex-end",
              }}
            >
              <Image source={this.state.photoSource} style={{height: 100, width: 100, borderRadius: 25}} />
              {this.props.uploadMessage.loading && <View style={{position: 'absolute',
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            alignItems: 'center',
                            justifyContent: 'center'}}><ActivityIndicator /></View>}
            </View>
            :
            <TextInput
              style={{
                flex: 1,
                maxHeight: 100,
                minHeight: 40,
                paddingTop: 10,
                paddingBottom: 10,
                paddingHorizontal: 10,
                marginVertical: 5,
                marginLeft: 10,
              }}
              value={message}
              placeholder={"Enter some text"}
              multiline
              // autoFocus
              onChangeText={newText => this.setState({ message: newText })}
            />

          }
          <TouchableOpacity
            onPress={this.onPress}
            style={{
              padding: 10,
            }}
          >
            <View
                style={{
                  height: 30,
                  justifyContent: "center",
                }}
              >
              <Text
                style={{
                  color: "black",
                }}
              >
                Send
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

    );
  }


}
