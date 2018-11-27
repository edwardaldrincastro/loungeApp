import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { announcements } from "../utilities/data/data_samples";
import { UserIcon, EyeIcon } from "../utilities/icons";

class Announcements extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        console.log("statesee", this.props.navigation.state)
        return (

            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Announcements</Text>
                    </View>
                    {announcements.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => this.props.navigation.navigate('AnnouncementDetails',
                                {
                                    name: item.name,
                                    datePosted: item.datePosted,
                                    postedBy: item.postedBy,
                                    description: item.description,
                                    when: item.when,
                                    where: item.where,
                                    contact: item.contact
                                })}>
                            <View style={styles.announcementContainer}>
                                <View style={styles.announcementTitleContainer}>
                                    <Text
                                        style={styles.announcementTitle}>{item.name}</Text>
                                </View>
                                <View style={styles.detailsContainer}>
                                    <View style={styles.datePostedContainer}>
                                        <EyeIcon color={"#FF5A5F"} />
                                        <Text style={styles.detailsText}>{item.datePosted}</Text>
                                    </View>
                                    <View style={styles.postedByContainer}>
                                        <UserIcon />
                                        <Text style={styles.detailsText}>{item.postedBy}</Text>
                                    </View>
                                </View>

                                <View style={styles.announcementDescriptionContainer}>
                                    <Text
                                        numberOfLines={3}
                                        style={styles.announcementDescription}>{item.description}</Text>
                                </View>
                                <View style={styles.hr} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    titleContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    hr: {
        width: "100%",
        height: 1,
        backgroundColor: '#e1e1e1',
        marginVertical: 15
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
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
    announcementContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    announcementTitleContainer: {
        flex: 1,
    },
    announcementTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    announcementDescriptionContainer: {
        flex: 1,
        paddingVertical: 10
    },
    announcementDescription: {
        fontSize: 16,
        color: "#8d8d8d",
        fontWeight: 'bold'
    },
})

export default Announcements;