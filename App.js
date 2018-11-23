import React, { Component } from 'react';
import { createSwitchNavigator,createStackNavigator } from 'react-navigation';
import AppDrawer from "./src/components/AppDrawerNavigation";
import UserLogin from "./src/screens/UserLogin";
import CreateAccount from "./src/screens/CreateAccount";
import AccountConfirmed from "./src/screens/AccountConfirmed";
// import AppSwitchNav from "./src/components/AppSwitchNavigator";
// import AuthStack from "./src/components/AuthStackNavigator";

export default class App extends Component {
  render() {
    return (
      <AppSwitchNav />
    );
  }
}

const AuthStackNav = createStackNavigator({
  UserLogin: UserLogin,
  CreateAccount: CreateAccount,
  AccountConfirmed: AccountConfirmed
},
  {
      initialRouteName: 'UserLogin'
  }

)

const AppSwitchNav = createSwitchNavigator({
  Auth: AuthStackNav,
  Entry: AppDrawer,
},
  {
    initialRouteName: 'Auth'
  }

)

