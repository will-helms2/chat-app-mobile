import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    height: 75,
    width: 280,
  },
  logoContainer: {
    paddingTop: 250,
    alignItems:'center',
  },
  signInButtonContainer:{
    backgroundColor: "#8A2BE2",
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  signUpButtonContainer:{
    backgroundColor: "#0099cc",
    paddingVertical: 10,
    borderRadius: 5,
  },
  button: {
    color: "white",
    textAlign: 'center',
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },
});
