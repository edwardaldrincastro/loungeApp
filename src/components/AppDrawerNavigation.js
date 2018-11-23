import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import SendFeedbackPage from "../screens/SendFeedback";
import AnnouncementsStack from "./AnnouncementsStack";
import SkillsStack from "./SkillsStack";

class AppDrawerNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <AppDrawerNav/>
    );
  }
}

export const AppDrawerNav = createDrawerNavigator({
    Announcements: AnnouncementsStack,
    SkillsDevelopment: SkillsStack,
    SendFeedback: SendFeedbackPage
  }, {
    initialRouteName: 'Announcements',
    contentOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: 'red'
    },
  });
export default AppDrawerNavigation;
