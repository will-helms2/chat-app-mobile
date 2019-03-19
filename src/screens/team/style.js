import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  teamHeader: {
    justifyContent: 'center',
    padding: 20,
  },
  teamHeaderText: {
    textAlign: "center",
    fontSize: 18,
  },
  userListContainer: {
    borderBottomWidth: 1,
  },
  userButton: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  userImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  userButtonText: {
    textAlign: "center",
    paddingTop: 5,
  },
  channelHeader: {
    justifyContent: 'center',
    padding: 15,
  },
  channelHeaderText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  channelsContainer: {
    paddingHorizontal: 0,
  },
  channelButton:{
    backgroundColor: "#8A2BE2",
    paddingVertical: 10 ,
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
  },
  dmButton:{
    backgroundColor: "#0099cc",
    paddingVertical: 10 ,
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
  },
  channelButtonAdd:{
    backgroundColor: "#0099cc",
    paddingVertical: 10 ,
    marginTop: 10,
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-start",
  },
  channelButtonText: {
    color: "white",
    textAlign: 'center',
    paddingRight: 10,
    fontSize: 16,
    paddingLeft: 5,
  },
  dmButtonText: {
    color: "white",
    textAlign: 'center',
    paddingRight: 10,
    fontSize: 16,
    paddingLeft: 20,
  },
  channelButtonLock:{
    color: "white",
    textAlign: 'center',
    paddingRight: 10,
    fontSize: 16,
    paddingLeft: 20,
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
  channelSection: {
    flex: 1,
  },
  dmSection: {
    flex: 1,
    paddingTop: 50,
  }
});
