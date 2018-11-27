import React, { Component } from 'react';
import { View} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from 'react-navigation';


class BackIcon extends Component {
    render() {
        return (
            <View style={{ width: 72, flex: 1, alignItems: 'flex-start', marginLeft: 15}}>
                <Icon name="md-arrow-back" size={25} color="#fff" onPress={() => this.props.navigation.goBack()} />
            </View>
        )
    }
}
export default withNavigation(BackIcon)