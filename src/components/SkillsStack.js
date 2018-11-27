import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SkillsDevelopment from "../screens/SkillsDevelopment";
import SkillDetails from "../screens/SkillDetails";
import { MenuIcon, NotificationIcon } from "../utilities/icons/";


export default SkillsStack = createStackNavigator({
    SkillsDevelopment: SkillsDevelopment,
    SkillDetails: SkillDetails,
},
    {
        initialRouteName: 'SkillsDevelopment',
        navigationOptions: () => {
            return {
                title: 'Yondu Lounge',
                headerStyle: {
                    backgroundColor: "#FF5A5F",
                    elevation: 0

                },
                headerLeft: <MenuIcon />,
                headerRight: <NotificationIcon />,
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

