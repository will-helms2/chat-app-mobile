import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  teamHeader: {
    justifyContent: 'center',
    padding: 20,
  },
  teamHeaderText: {
    textAlign: "center",
    fontSize: 16,
  },
  userListContainer: {
    borderBottomWidth: 1,
  },
  userButton: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingBottom: 10,
  },
  userButtonText: {
    textAlign: "center",
  },
  channelHeader: {
    justifyContent: 'center',
    padding: 15,
  },
  channelHeaderText: {
    textAlign: "center",
    fontSize: 14,
  },
  channelsContainer: {
    paddingHorizontal: 20,
  },
  channelButton:{
    backgroundColor: "#8A2BE2",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  channelButtonText: {
    color: "white",
    textAlign: 'center',
    paddingRight: 10,
  },
  createChannelContainer:{
    justifyContent: "center",
    alignItems: "center",
  },
  createChannelButton: {
    paddingTop: 20,
  },
  createChannelText: {
    color: "#0099cc",
  },
  logo: {
    height: 75,
    width: 280,
  },
  logoContainer: {
    paddingTop: 250,
    alignItems:'center',
  },
  signUpButtonContainer:{
    backgroundColor: "#0099cc",
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
