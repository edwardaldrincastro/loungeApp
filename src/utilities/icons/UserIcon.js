import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";


class UserIcon extends Component {
    render() {
        return (
            <Icon name="user" size={20} color="#FF5A5F"/>
        )
    }
}
export default UserIcon