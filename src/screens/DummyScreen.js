import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DummyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    headerTitle: "DummyScreen",
 
}
  render() {
    return (
      <View>
        <Text> DummyScreen </Text>
      </View>
    );
  }
}

export default DummyScreen;
