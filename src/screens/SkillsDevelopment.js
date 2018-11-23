import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class SkillsDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> SkillsDevelopment </Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SkillDetails')}>
                    <View>
                        <Text>UXPH</Text>
                    </View>
                </TouchableOpacity>
      </View>
    );
  }
}

export default SkillsDevelopment;
