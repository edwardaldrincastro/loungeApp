import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { EyeIcon, EyeOffIcon } from "../utilities/icons/";

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: this.props.showEye || false
        };
    }
    showPasswordHandler = () => {
        this.setState({
            showPass: !this.state.showPass,
        })
    }
    eyeHandler = () => {
        if (this.props.showEye) {
            if (this.state.showPass) {
                return (
                    <TouchableOpacity onPress={() => this.showPasswordHandler()}>
                        <EyeIcon />
                    </TouchableOpacity>
                )
            } else {
                return (
                    <TouchableOpacity onPress={() => this.showPasswordHandler()}>
                        <EyeOffIcon />
                    </TouchableOpacity>
                )
            }
        } else {
            return null
        }
    }

    render() {

        return (
            <View style={styles.inputText}>
                <TextInput
                    placeholder={this.props.placeText}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.state.showPass}
                    value={this.props.value} />
                    
                {this.eyeHandler()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#E1E1E1",
        backgroundColor: '#E1E1E1',
        marginVertical: 5,
        paddingHorizontal: 10,

    },
})

export default InputText;
