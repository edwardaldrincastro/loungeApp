import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation, DrawerActions } from 'react-navigation';


class EyeIcon extends Component {
    render() {
        return (
            <Icon name="md-eye" size={25} color={this.props.color || "#333333"} />
        )
    }
}
export default withNavigation(EyeIcon)