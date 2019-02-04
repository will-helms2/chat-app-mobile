import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  invitationContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inviteTextContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0099cc",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  teamNameText: {
    color: "white",
    fontSize: 18,
    paddingBottom: 10,
    fontWeight: "bold",
  },
  fromText:{
    color: "white",
  },
  buttonsContainer:{
    paddingVertical: 10,
    flex: 1,
    flexDirection: "row"
  },
  acceptButton: {
    backgroundColor: "green",
    borderRadius: 5,
    padding: 20,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },
  declineButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 20,
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },
  acceptText: {
    fontSize: 18,
    color: "white"
  },
  declineText: {
    fontSize: 18,
    color: "white"
  }
});
