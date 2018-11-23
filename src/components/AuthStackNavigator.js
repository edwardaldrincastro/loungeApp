import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import UserLogin from "../screens/UserLogin";
import CreateAccount from "../screens/CreateAccount";
import AccountConfirmed from "../screens/AccountConfirmed";

class AuthStackNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <AuthStackNav />
        );
    }
}

export const AuthStackNav = createStackNavigator({
    UserLogin: UserLogin,
    CreateAccount: CreateAccount,
    AccountConfirmed: AccountConfirmed
},
    {
        initialRouteName: 'UserLogin'
    }

)
export default AuthStackNavigator;
