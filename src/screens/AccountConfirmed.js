import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class AccountConfirmed extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> AccountConfirmed </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Entry')}>
            <View>
                <Text>Login now</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default AccountConfirmed;
