import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  profileContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 18,
  },
  nameContainer: {
    alignItems: "center",
    paddingTop: 40,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dmButton:{
    backgroundColor: "#0099cc",
    borderRadius: 5,
    padding: 20,
  },
  dmText:{
    color: "white",
    fontSize: 16,
  }
});
