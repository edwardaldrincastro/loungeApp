import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { View, StyleSheet, } from 'react-native';
import { withNavigation } from 'react-navigation';


class MenuIcon extends Component {
    render() {
        let naviDes = this.props.navi
        return (
            <View style={styles.iconContainer}>
                <Icon name="md-menu" size={25} color="#fff" onPress={() => this.props.navigation.toggleDrawer()} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconContainer: {
        width: 72,
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 15
    }
})


export default withNavigation(MenuIcon)