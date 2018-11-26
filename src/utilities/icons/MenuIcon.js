import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { withNavigation, DrawerActions } from 'react-navigation';


class MenuIcon extends Component {
    render() {
        let naviDes = this.props.navi
        return (
            <View style={{  width: 72, flex: 1, alignItems: 'flex-start', marginLeft: 15}}>
                <Icon name="md-menu" size={25} color="#fff" onPress={() => this.props.navigation.toggleDrawer()} />
            </View>
        )
    }
}
export default withNavigation(MenuIcon)