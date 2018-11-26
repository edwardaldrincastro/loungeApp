import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { withNavigation } from 'react-navigation';
import { announcements } from '../utilities/data/data_samples';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    clickHandler = () => {
        if (this.props.destination === "back") {
            return this.props.navigation.goBack()
        } else if (this.props.destination === "submit") {
            Alert.alert("Feedback Sent",
                "Your feedback has been sent. You will be notified once the recipient replied.",
                [
                    { text: 'OK', onPress: () => this.props.navigation.navigate('Announcements'), style: 'destructive' },
                ],
                { cancelable: false }
            )
        } else {
            return this.props.navigation.navigate(this.props.destination, { itemPassed: this.props.param || null })
        }
    }
    render() {
        let bgColor, bdColor, textColor
        if (this.props.pink) {
            bgColor = "#FF5A5F",
                bdColor = "#FF5A5F",
                textColor = "#fff"
        } else {
            bgColor = "#fff",
                bdColor = "#FF5A5F",
                textColor = "#FF5A5F"
        }
        console.log("checker", this.props.param)
        return (
            <View>
                <TouchableOpacity onPress={() => this.clickHandler()}>
                    <View style={[styles.button, { backgroundColor: bgColor, borderColor: bdColor }]}>
                        <Text style={[styles.buttonText, { color: textColor }]}>{this.props.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#FF5A5F',
        backgroundColor: '#FF5A5F',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold',
    }
})

export default withNavigation(Button);
