import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  KeyboardAvoidingView,
  View,
  FlatList,
  UIManager,
  LayoutAnimation,
  ActivityIndicator,
  Text,
  Modal,
  StatusBar,
} from "react-native";
//import ImageViewer from "react-native-image-zoom-viewer";
import Bubble from "./bubble";
import Composer from "./composer";
import { IOS } from "./constants";

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullImageShown: false,
      fullImageUrl: "",
    };
  }

    // if (!IOS && UIManager.setLayoutAnimationEnabledExperimental) {
    //   UIManager.setLayoutAnimationEnabledExperimental(true);
    // }
  //}

  // imagePressed = uri => {
  //   this.setState({
  //     fullImageShown: true,
  //     fullImageUrl: uri,
  //   });
  // };

  render() {
    const {
      messages,
      user,
      onSend,
      loadEarlier,
      onLoadEarlier,
      isLoadingEarlier,
      loading,
      style,
      showChatterAvatar,
      notSentText,
      inputPlaceholder,
      SendButtonComponent,
      SentComponent,
      allowFiles,
      selectImage,
      selectFile,
      filePressed,
      keyboardVerticalOffset,
    } = this.props;

    const { fullImageShown, fullImageUrl } = this.state;

    // const images = messages
    //   .filter(message => !!message.image)
    //   .map(message => ({ url: message.image }));

    // const selectedImageIndex = images.findIndex(image => image.url === fullImageUrl);

    (messages);

    return (
      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={90}
        style={{
          flex: 1,
          backgroundColor: style.backgroundColor,
        }}
      >
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            data={messages}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => (
              <Bubble
                style={style.bubble}
                message={item}
                user={user}
                last={index === 0}
                nextMessage={messages[index + 1] || {}}
                prevMessage={messages[index - 1] || {}}
                showChatterAvatar={false}
                notSentText={notSentText}
                SentComponent={SentComponent}
              />
            )}
            ListFooterComponent={
              isLoadingEarlier && (
                <View
                  style={{
                    paddingVertical: 10,
                  }}
                >
                  <ActivityIndicator size="large" />
                </View>
              )
            }
            ListEmptyComponent={
              <View style={{ height: 200, justifyContent: "center", alignItems: "center" }}>
                <Text>No messages</Text>
              </View>
            }
            inverted
            onEndReached={loadEarlier && !isLoadingEarlier && onLoadEarlier}
            onEndReachedThreshold={0.01}
          />
        )}
        <Composer
          onSend={message => {
            LayoutAnimation.configureNext({
              duration: 300,
              create: {
                type: LayoutAnimation.Types.easeInEaseOut,
                property: LayoutAnimation.Properties.opacity,
              },
              update: { type: LayoutAnimation.Types.easeInEaseOut },
            });
            onSend(message);
          }}
          userId={user.id}
          inputPlaceholder={inputPlaceholder}
          allowFiles={allowFiles}
          selectImage={selectImage}
          selectFile={selectFile}
          uploadMessagePhoto={this.props.uploadMessagePhoto}
          uploadMessage={this.props.uploadMessage}
          onFileSend={this.props.onFileSend}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Chat;


Chat.defaultProps = {
  loadEarlier: false,
  loading: false,
  onLoadEarlier: () => null,
  isLoadingEarlier: false,
  style: {
    backgroundColor: "white",
    bubble: {
      seperatorTimeColor: "#262626",
      right: {
        backgroundColor: "#dff8c0",
        textColor: "#262626",
        textSize: 16,
        timeTextSize: 14,
        timeTextColor: "#00000073",
        sendingColor: "#5fc2fc",
        sentColor: "#5fc2fc",
        errorTextColor: "red",
      },
      left: {
        textSize: 16,
        timeTextSize: 14,
        backgroundColor: "#ffffff",
        textColor: "#262626",
        timeTextColor: "#00000073",
      },
    },
    // composer: {
    //   backgroundColor: "#f5f1ee",
    //   inputBackgroundColor: "#ffffff",
    //   inputTextColor: "#262626",
    //   inputPlaceholderTextColor: "#a5a5a5",
    //   inputTextSize: 16,
    //   sendIconDisabledColor: "#a2a4a5",
    //   sendIconActiveColor: "#5fc2fc",
    // },
  },
  showChatterAvatar: false,
  notSentText: "Not sent.",
  inputPlaceholder: "Type a message",
  SendButtonComponent: false,
  SentComponent: false,
  allowFiles: false,
  keyboardVerticalOffset: 0,
  selectImage: () => null,
  selectFile: () => null,
  filePressed: () => null,
};
