import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MenuButton from "../components/MenuButton";


class Announcements extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        headerTitle: "Announcements",
        headerLeft: (
            <MenuButton/>
        ),
    }
    render() {
        return (
            <View>
                <Text> Announcements </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AnnouncementDetails')}>
                    <View>
                        <Text>UXPH</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Announcements;
