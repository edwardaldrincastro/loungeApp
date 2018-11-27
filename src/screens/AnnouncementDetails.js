import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BackIcon, UserIcon, EyeIcon } from "../utilities/icons/";
import CustomButton from "../components/Button";

class AnnouncementDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions = {
        title: 'Announcements',
        headerLeft: <BackIcon />,
        headerTitleStyle: {
            width: '100%',
            fontSize: 16,
            color: '#fff'
        },
    }
    render() {
        let name = this.props.navigation.getParam("name", "no name")
        let datePosted = this.props.navigation.getParam("datePosted", "no who")
        let postedBy = this.props.navigation.getParam("postedBy", "no remainingSlot")
        let description = this.props.navigation.getParam("description", "no description")
        let when = this.props.navigation.getParam("when", "no when")
        let where = this.props.navigation.getParam("where", "no where")
        let contact = this.props.navigation.getParam("contact", "no contact")
        return (
            <View style={styles.container}>

                <View style={styles.titleContainer}>
                    <Text style={styles.announcementTitle}>{name}</Text>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.datePostedContainer}>
                        <EyeIcon color={"#FF5A5F"} />
                        <Text style={styles.detailsText}>{datePosted}</Text>
                    </View>
                    <View style={styles.postedByContainer}>
                        <UserIcon />
                        <Text style={styles.detailsText}>{postedBy}</Text>
                    </View>
                </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.announcementDescription}>{description}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Text style={styles.distributionText}>DISTRIBUTION SCHEDULE</Text>
                    <Text style={styles.announcementDetails}>{when}</Text>
                    <Text style={styles.announcementDetails}>{where}</Text>
                    <Text style={styles.contactTitle}>{contact}</Text>
                </View>
                <View style={styles.buttonContainer}>

                    <CustomButton pink text="Send Feedback" destination="AnnouncementFeedback" param={name}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 15,
    },
    textBold: {
        fontWeight: 'bold'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    announcementTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    descriptionContainer: {
        flex: 2,
        maxHeight: 90,
        justifyContent: 'center'
    },
    announcementDescription: {
        fontSize: 16,
        color: "#8d8d8d",
        fontWeight: 'bold'
    }, 
    distributionContainer: {
        flex: 2,
        maxHeight: 90,
    },
    distributionText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    contactTitle: {
        fontSize: 16,
        color: "#8d8d8d",
        fontWeight: 'bold'
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 50
    },
    locationContainer: {
        flex: 2,
        justifyContent: 'space-around'
    },
    detailsText: {
        fontSize: 12,
        color: '#FF5A5F',
        marginLeft: 10
    },
    datePostedContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    postedByContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    announcementDetails: {
        fontSize: 16,
        color: "#8d8d8d",
        fontWeight: 'bold'
    },
    contactContainer: {
        flex: 0.5,
    },
    buttonContainer: {
        flex: 2,
        justifyContent: 'center',
    },
})

export default AnnouncementDetails;