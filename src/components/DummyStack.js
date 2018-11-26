import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { MenuIcon, NotificationIcon } from "../utilities/icons/";
import DummyScreen from "../screens/DummyScreen";

export default DummyStack = createStackNavigator({
  DummyStack: DummyScreen,
},
    {
        initialRouteName: 'DummyStack',
        navigationOptions: ({ navigation }) => {
            return {
                title: 'Dummy Screen',
                headerStyle: {
                    backgroundColor: "#FF5A5F",
                    elevation: 0

                },
                headerTintColor: "#323232",
                headerLeft: <MenuIcon />,
                headerRight: <NotificationIcon/>,
                headerTitleStyle: {
                    width: '100%',
                    marginHorizontal: 0,
                    textAlign: 'center',
                    fontSize: 15,
                    color: '#fff'
                },
            }
        }
    }


)
