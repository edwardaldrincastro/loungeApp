import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LocalImage from "../components/LocalImage";
import CustomButton from '../components/Button';
import InputText from '../components/InputText';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        };
    }

    usernameChangedHandler = (input) => {
        this.setState({
            username: input
        })
    }
    passwordChangedHandler = (input) => {
        this.setState({
            password: input
        })
    }

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.appLogoContainer}>
                    <LocalImage source={require("../assets/logo/airbnb_logo.png")}
                        originalWidth={2000}
                        originalHeight={625}
                        logoType="appLogo" />
                </View>
                <View style={styles.title}>

                    <Text style={styles.loginTitle}> User Login </Text>
                </View>
                <View style={styles.inputBoxContainer}>
                    <InputText placeText="Username" onChangeText={val => this.usernameChangedHandler(val)} value={this.state.username} />
                    <InputText placeText="Password" onChangeText={val => this.passwordChangedHandler(val)} showEye={true} value={this.state.password} />
                </View>
                <View style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}> Forgot your password? </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton pink text="Login" destination="Entry" param={this.state.username} />
                    <CustomButton text="Create Account" destination="CreateAccount" />
                </View>
                <View style={styles.companyLogoContainer}>
                    <LocalImage source={require("../assets/logo/yondu_logo.jpg")}
                        originalWidth={1203}
                        originalHeight={253}
                        logoType="companyLogo" />
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    appLogoContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
    },
    companyLogoContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 15,
    },
    title: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    inputBoxContainer: {
        flex: 4,
        paddingHorizontal: 40,
        justifyContent: 'center'
    },
    forgotPassword: {
        flex: 1,
        alignItems: 'center',
    },
    forgotPasswordText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF5A5F'
    },
    buttonContainer: {
        flex: 3,
        paddingHorizontal: 40,
        justifyContent: 'center',
    },


})

export default UserLogin;
