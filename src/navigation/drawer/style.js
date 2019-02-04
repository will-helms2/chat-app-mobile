import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  userSection: {
    flex: 1,
    backgroundColor: "#8A2BE2",
    padding: 20,
  },
  userText: {
    color: "white",
  },
  teamsContainer:{
    flex: 1,
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  teamButton: {
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#0099cc",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  teamTitleContainer: {
    padding: 20,
  },
  notifsButton: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#8A2BE2",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  settingsContainer: {
    marginTop: 15,
  },
  buttonText: {
    color: "white",
  },

  signOutContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  signOutButton: {
    paddingLeft: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: "#8A2BE2",
    marginHorizontal: 10,
    marginBottom: 30,
  },
  signOutText: {
    color: "white",
  },
});
