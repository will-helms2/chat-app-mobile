import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export default function screen(WrappedComponent, options) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    _renderError(error, loading, errors){

      let errorMessage = "";

      const containerStyle = {
        backgroundColor: 'rgba(255, 0, 0, 0.8)',
        padding: 20,
        marginTop: 10,
        borderRadius: 5,
      };

      const textStyle = {
        color: "white",
        textAlign: "center",
      };

      if(errors && !loading){
        const keys = Object.keys(errors);
        for (const key of keys) {
          if(keys.length === 0 || key === keys[keys.length - 1]){
            errorMessage = errors[key];
          }else{
            errorMessage = errors[key] + "\n";
          }
        }

        return(
          <View style={containerStyle}>
            <Text style={textStyle}>{errorMessage}</Text>
          </View>
        );
      }else if(error && !loading){
        return(
          <View style={containerStyle}>
            <Text style={textStyle}>{error}</Text>
          </View>
        );
      }
    }

    render() {
      return (
        <SafeAreaView style={{
          flex: 1,
          backgroundColor: "white",
        }}>
          <WrappedComponent {...this.props} _renderError={this._renderError} />
        </SafeAreaView>
      );
    }
  };
}
