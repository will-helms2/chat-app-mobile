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
  }
});
