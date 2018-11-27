import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import SendFeedbackPage from "../screens/SendFeedback";
import AnnouncementsStack from "./AnnouncementsStack";
import SkillsStack from "./SkillsStack";
import DummyStack from "./DummyStack";

export default AppDrawer = createDrawerNavigator({
  Announcements: AnnouncementsStack,
  Attendance: DummyStack,
  "Company Policies": DummyStack,
  "Compensation & Benefits": DummyStack,
  "Working Conditions": DummyStack,
  "Skills Development": SkillsStack,
  Notifications: DummyStack,
  SendFeedback: SendFeedbackPage,
}, {
    initialRouteName: 'Announcements',
    drawerWidth: Dimensions.get("window").width - 50,
    contentOptions: {
      activeTintColor: '#FF5A5F',
      inactiveTintColor: '#585858',
      activeBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 18
      }
    },

    contentComponent: (props) => (

      <SafeAreaView style={styles.safeAreaContainer}>
        {console.log("app props", props.navigation.state.index)}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ fontSize: 16 }}>Welcome, Fritz!</Text>
          </View>
          <View style={styles.hr} />
          <View>
            <DrawerItems {...props} />
          </View>
          <View style={styles.footer}>

            <TouchableOpacity onPress={() => props.navigation.navigate('SendFeedback')}>
              <Text style={[styles.footerText, { color: feedbackColor(props) }]}>Send Feedback</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Auth')}>
              <Text style={styles.footerText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView >
    )
  }
)
const feedbackColor = (props) => {
  if (props.navigation.state.index == 7) {
    return '#FF5A5F'
  } else {
    return '#8d8d8d'
  }
}
const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    width: "100%",
    flexDirection: 'row'
  },
  container: {
    flex: 1,
  },
  hr: {
    height: 1,
    width: "100%",
    backgroundColor: '#eeeeee'
  },
  header: {
    flex: 1,
    maxHeight: 56,
    justifyContent: 'center',
    paddingLeft: 15
  },
  footer: {
    flex: 1,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: Dimensions.get("window").height / 8
  },
  footerText: {
    fontSize: 16,
    color: "#8d8d8d",
    fontWeight: 'bold',
    paddingVertical: 10
  }
})

