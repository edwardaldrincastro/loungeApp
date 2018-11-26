import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { createDrawerNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import SendFeedbackPage from "../screens/SendFeedback";
import AnnouncementsStack from "./AnnouncementsStack";
import SkillsStack from "./SkillsStack";
import DummyScreen from "../screens/DummyScreen";
import DummyStack from "./DummyStack";
import SkillsDevelopment from "../screens/SkillsDevelopment";

// class AppDrawerNavigation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }
//   render() {
//     console.log(this.props.navigation.state)
//     console.log("appdraw", this.props.navigation.state)

//     console.log("statesee", this.props.navigation.state)
//     return (
//       <AppDrawerNav />
//     );
//   }
// }

export default AppDrawer = createDrawerNavigator({
  Announcements: AnnouncementsStack,
  Attendance: DummyStack,
  "Company Policies": DummyStack,
  "Compensation & Benefits": DummyStack,
  "Working Conditions": DummyStack,
  "Skills Development": SkillsStack,
  Notifications: DummyStack,
  SendFeedback: SendFeedbackPage,
  // SendFeedbackPage: {
  //   screen: SendFeedbackPage,
  //   contentOptions: {
  //     labelStyle: {
  //       color: 'red',
  //       fontWeight: 'bold',
  //     }
  //   }
  // }
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

      <SafeAreaView style={{ flex: 1, width: "100%", flexDirection: 'row' }}>
        {console.log("app props", props)}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ fontSize: 16 }}>Welcome, Fritz!</Text>
          </View>
          <View style={{ height: 1, width: "100%", backgroundColor: '#eeeeee' }} />
          <View>
            <DrawerItems {...props} />
          </View>

          <View style={{ backgroundColor: '#000', height: 1, width: "100%" }} />
          <View style={styles.footer}>

            <TouchableOpacity onPress={() => props.navigation.navigate('SendFeedback')}>
              <Text style={styles.footerText}>Send Feedback</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    maxHeight: 56,
    justifyContent: 'center',
    paddingLeft: 15
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18
  },
  footerText: {
    fontSize: 16,
    color: "#8d8d8d",
    fontWeight: 'bold'
  }
})

// export default AppDrawerNavigation;
