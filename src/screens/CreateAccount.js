import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LocalImage from "../components/LocalImage";
import Button from '../components/Button';
import InputText from '../components/InputText';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      confirmPassword: null
  };
}

usernameChangedHandler = (input) => {
  this.setState({
      username: input
  })
}
passwordChangedHandler = (input) => {
  this.setState({
      password: input
  })
}
confirmPasswordChangedHandler = (input) => {
  this.setState({
      confirmPassword: input
  })
}
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appLogoContainer}>
          <LocalImage source={require("../assets/logo/airbnb_logo.png")}
            originalWidth={2000}
            originalHeight={625}
            logoType="appLogo"  />
        </View>
        <View style={styles.title}>

          <Text style={styles.titleText}> Create an Account </Text>
        </View>
        <View style={styles.inputBoxContainer}>
          <InputText placeText="Enter Yondu Email" onChangeText={val => this.usernameChangedHandler(val)} value={this.state.username}  />
          <InputText placeText="Password" onChangeText={val => this.passwordChangedHandler(val)} showEye={true} value={this.state.password} />
          <InputText placeText="Confirm Password" onChangeText={val => this.confirmPasswordChangedHandler(val)} showEye={true} value={this.state.confirmPassword} />
        </View>
        <View style={styles.buttonContainer}>
          <Button pink text="Submit" destination="AccountConfirmed" />
          <Button text="Cancel" destination="back" />
        </View>
        <View style={styles.companyLogoContainer}>
          <LocalImage source={require("../assets/logo/yondu_logo.jpg")}
            originalWidth={1203}
            originalHeight={253}
            logoType="companyLogo" />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  appLogoContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
},
companyLogoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
},
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
      fontSize: 22,
      fontWeight: 'bold',
  },
  inputBoxContainer: {
    flex: 5,
    paddingHorizontal: 40,
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 3,
    paddingHorizontal: 40,
    justifyContent: 'center',
  },

})

export default CreateAccount;
