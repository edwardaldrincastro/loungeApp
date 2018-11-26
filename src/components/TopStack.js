import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SkillsDevelopment from "../screens/SkillsDevelopment";
import SkillDetails from "../screens/SkillDetails";
import CustomSkills from "../screens/CustomSkills";
import { MenuIcon, NotificationIcon } from "../utilities/icons/";
import SkillsStack from "./SkillsStack";
class TopStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        drawerLabel: "Skills Development"
      }
    render() {
        return (
            <SkillsStackNav />
        );
    }
}

export const TopStackNav = createStackNavigator({
    CustomSkills: CustomSkills,
    SkillDetails: SkillDetails,
},
    {
        initialRouteName: 'CustomSkills',
        // navigationOptions: ({ navigation }) => {
        //     return {
        //         title: 'Yondu Lounge',
        //         headerStyle: {
        //             backgroundColor: "#FF5A5F",
        //             elevation: 0

        //         },
        //         headerLeft: <MenuIcon />,
        //         headerRight: <NotificationIcon />,
        //         headerTitleStyle: {
        //             flex: 1,
        //             textAlign: 'center',
        //             fontSize: 15,
        //             color: '#fff'
        //         },
        //     }
        // }
    }

)
export default TopStack;
