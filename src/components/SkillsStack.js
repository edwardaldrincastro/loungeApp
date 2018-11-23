import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import SkillsDevelopment from "../screens/SkillsDevelopment";
import SkillDetails from "../screens/SkillDetails";

class SkillsStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SkillsStackNav />
        );
    }
}

export const SkillsStackNav = createStackNavigator({
    SkillsDevelopment: SkillsDevelopment,
    SkillDetails: SkillDetails,
},
    {
        initialRouteName: 'SkillsDevelopment'
    }

)
export default SkillsStack;
