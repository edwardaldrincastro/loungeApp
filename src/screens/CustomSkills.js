import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { skills_development } from "../utilities/data/data_samples";

class CustomSkills extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SkillDetails',
                    {
                        name: this.props.name,
                        description: this.props.description,
                        when: this.props.when,
                        where: this.props.where,
                        who: this.props.who,
                        remainingSlot: this.props.remainingSlot,
                        about: this.props.about,
                        contact: this.props.contact
                    })}>
                    <View style={styles.skillContainer}>
                        <View style={styles.skillTitleContainer}>
                            <Text
                                style={styles.skillTitle}>{this.props.name}</Text>
                        </View>
                        <View style={styles.skillDescriptionContainer}>
                            <Text
                                numberOfLines={3}
                                style={styles.skillDescription}>{this.props.description}</Text>
                        </View>
                        <View style={{
                            width: "100%", height: 1, backgroundColor: '#e1e1e1',
                            marginVertical: 15
                        }} />
                    </View>
                </TouchableOpacity>

            </View>
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
        paddingVertical: 10
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    skillContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    skillTitleContainer: {
        flex: 1,
    },
    skillTitle: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    skillDescriptionContainer: {
        flex: 1,
        paddingVertical: 5
    },
    skillDescription: {
        fontSize: 15
    },
})

export default CustomSkills;
