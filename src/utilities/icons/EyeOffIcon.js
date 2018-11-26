import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation, DrawerActions } from 'react-navigation';


class EyeOffIcon extends Component {
    render() {
        return (
            <Icon name="md-eye-off" size={25} color="#333333" />
        )
    }
}
export default withNavigation(EyeOffIcon)