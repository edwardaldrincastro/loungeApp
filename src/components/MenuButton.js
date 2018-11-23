import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation, DrawerActions } from 'react-navigation';


class MenuButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => alert("open drawer")}>
                <Icon
                    name="ios-menu"
                    color="#000"
                    size={30}
                />
            </TouchableOpacity >
        )
    }
}
export default withNavigation(MenuButton)