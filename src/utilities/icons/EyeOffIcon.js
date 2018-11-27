import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from 'react-navigation';


class EyeOffIcon extends Component {
    render() {
        return (
            <Icon name="md-eye-off" size={25} color="#333333" />
        )
    }
}
export default withNavigation(EyeOffIcon)