import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> UserLogin </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Entry')}>
            <View>
                <Text>Login</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('CreateAccount')}>
            <View>
                <Text>Create Account</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UserLogin;
