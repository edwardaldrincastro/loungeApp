import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Announcements from "../screens/Announcements";
import AnnouncementDetails from "../screens/AnnouncementDetails";
import { MenuIcon, NotificationIcon } from "../utilities/icons/";
import AnnouncementFeedback from "../screens/AnnouncementFeedback";

export default AnnouncementStack = createStackNavigator({
    Announcements: Announcements,
    AnnouncementDetails: AnnouncementDetails,
    AnnouncementFeedback: AnnouncementFeedback
},
    {
        initialRouteName: 'Announcements',
        navigationOptions: () => {
            return {
                title: 'Yondu Lounge',
                headerStyle: {
                    backgroundColor: "#FF5A5F",
                    elevation: 0

                },
                headerLeft: <MenuIcon/>,
                headerRight: <NotificationIcon/>,
                headerTitleStyle: {
                    flex: 1,
                    textAlign: 'center',
                    fontSize: 16,
                    color: '#fff'
                },
            }
        }
    }


)
