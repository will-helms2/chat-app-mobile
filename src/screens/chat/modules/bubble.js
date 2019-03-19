import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Text, View, Animated, Image, TouchableOpacity } from "react-native";
import moment from "moment";
import { TIME_FORMAT } from "./constants";
import MessageStatus from "./message-status";
import Icon from 'react-native-vector-icons/MaterialIcons';

const ANIMATION_DURATION = 400;
const BUBBLE_BIG_BORDER_RADIUS = 25;
const BUBBLE_SMALL_BORDER_RADIUS = 10;

class Bubble extends PureComponent {
  constructor(props) {
    super(props);

    this.opacityAnimation = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.opacityAnimation, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {
      message: { content, userId, createdAt, isFile, photoUrl },
      nextMessage,
      prevMessage,
      style,
      notSentText,
      SentComponent,
      user,
    } = this.props;
    const right = false;

    isPhoto = isFile && photoUrl;

    const opacityAnimation = [
      {
        opacity: this.opacityAnimation,
      },
    ];

    const date = new Date();
    const offsetInHours = date.getTimezoneOffset();
    console.log(offsetInHours);
    console.log(moment(createdAt).utcOffset(offsetInHours).format("D MMMM"));

    return (
      <Animated.View style={opacityAnimation}>
        {!moment(createdAt, TIME_FORMAT).isSame(nextMessage.createdAt, "day") && (
          <View
            style={{
              alignItems: "center",
              marginHorizontal: 10,
              color: style.seperatorTimeColor,
            }}
          >
            <Text>{moment(createdAt).utcOffset(offsetInHours).format("D MMMM")}</Text>
          </View>
        )}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingLeft: 5,
            marginVertical: 5,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              width: 60,
            }}
          >
            {this.props.message.user.photoUrl ? <Image style={{height: 30, width: 30, borderRadius: 30}} source={{uri: user.photoUrl}}/> : <Icon name="person" size={30} color="black" style={{height: 30, width: 30, borderRadius: 30}} />}
              <Text style={{fontSize: 10}}>{this.props.message.user.firstName} {this.props.message.user.lastName}</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              paddingBottom: 5,
              backgroundColor: style.left.backgroundColor,
              marginBottom: userId !== prevMessage.userId ? 10 : 2,
              marginRight: 100,
              marginLeft: 10,
              borderLeftWidth: 1,
            }}
          >
            {!!isPhoto && (
              <TouchableOpacity onPress={() => imagePressed(photoUrl)} activeOpacity={0.9}>
                <Image
                  source={{ uri: photoUrl }}
                  style={{
                    width: 200,
                    height: 200,
                  }}
                />
              </TouchableOpacity>
            )}
            {/*!!fileUrl && (
              <TouchableOpacity onPress={() => filePressed(fileUrl)}>
                <Text>Download file</Text>
              </TouchableOpacity>
            )*/}

            <Text style={{fontSize: 10, paddingBottom: 5}}>{moment(createdAt).utcOffset(-600).format("h:mm A")}</Text>
            {(!!content && !isFile) && (
              <Text
                style={{
                  color: right ? style.right.textColor : style.left.textColor,
                  textAlign: right ? "right" : "left",
                  fontSize: 14,
                }}
              >
                {content}
              </Text>
            )}

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: right ? "flex-end" : "flex-start",
              }}
            >
              {right && (
                <MessageStatus
                  notSentText={notSentText}
                  style={style.right}
                  SentComponent={SentComponent}
                />
              )}
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }
}

// Bubble.propTypes = {
//   message: PropTypes.shape({
//     userId: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired])
//       .isRequired,
//     text: PropTypes.string,
//     image: PropTypes.string,
//     createdAt: PropTypes.string.isRequired,
//     sending: PropTypes.bool.isRequired,
//     error: PropTypes.bool.isRequired,
//   }).isRequired,
//   chatter: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
//     avatar: PropTypes.string,
//   }).isRequired,
//   user: PropTypes.shape({
//     id: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]).isRequired,
//   }).isRequired,
//   showChatterAvatar: PropTypes.bool.isRequired,
//   style: PropTypes.shape({}).isRequired,
//   nextMessage: PropTypes.shape({}).isRequired,
//   prevMessage: PropTypes.shape({}).isRequired,
//   notSentText: PropTypes.string.isRequired,
//   SentComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]).isRequired,
//   imagePressed: PropTypes.func.isRequired,
//   filePressed: PropTypes.func.isRequired,
// };

export default Bubble;
