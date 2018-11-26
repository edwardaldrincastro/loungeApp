import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LocalImage from "../components/LocalImage";
import Button from '../components/Button';
import InputText from '../components/InputText';

class AccountConfirmed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
            logoType="appLogo" />
        </View>
        <View style={styles.inputBoxContainer}>
          <Text style={styles.titleText}>Account Confirmed!</Text>
          <Text style={styles.descriptionText}>You may now login to your account.</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button pink text="Login Now" destination="Entry" />
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
  buttonContainer: {
    flex: 4,
    paddingHorizontal: 40,
    justifyContent: 'flex-start',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20
  },
  descriptionText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 40
  },
})

export default AccountConfirmed;
