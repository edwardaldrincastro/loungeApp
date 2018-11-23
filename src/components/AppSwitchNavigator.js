import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import AppDrawer from "./AppDrawerNavigation";
import AuthStack from "./AuthStackNavigator";

class AppSwitchNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <AppSwitchNav/>
        );
    }
}

export const AppSwitchNav = createSwitchNavigator({
    Auth: AuthStack,
    Entry: AppDrawer,
},
{
    initialRouteName: 'Auth'
}

)

export default AppSwitchNavigator;
