import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


class NotificationIcon extends Component {
    render() {
        let icon
        if (this.props.drawer){
            icon = (<Icon name="md-menu" size={25} color="#fff" onPress={() => alert("Notifications")} />)
        } else {
            icon = (<Icon name="ios-notifications" size={25} color="#fff" onPress={() => alert("Notifications")} />)
        }
        return (

            <View style={{ width: 72, flex: 1, alignItems: 'flex-end', marginRight: 15}}>
                {icon}
            </View>
        )
    }
}
export default NotificationIcon