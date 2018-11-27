import React, { Component } from 'react';
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from 'react-navigation';


class EyeIcon extends Component {
    render() {
        return (
            <Icon name="md-eye" size={25} color={this.props.color || "#333333"} />
        )
    }
}
export default withNavigation(EyeIcon)