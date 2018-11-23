import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> CreateAccount </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountConfirmed')}>
            <View>
                <Text>Create</Text>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CreateAccount;
