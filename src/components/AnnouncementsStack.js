import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Announcements from "../screens/Announcements";
import AnnouncementDetails from "../screens/AnnouncementDetails";

class AnnouncementsStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <AnnouncementsStackNav />
        );
    }
}

export const AnnouncementsStackNav = createStackNavigator({
    Announcements: Announcements,
    AnnouncementDetails: AnnouncementDetails,
},
    {
        initialRouteName: 'Announcements'
    }

)
export default AnnouncementsStack;
