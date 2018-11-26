import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { skills_development } from "../utilities/data/data_samples";
import { MenuIcon, NotificationIcon } from "../utilities/icons";
import CustomSkills from "./CustomSkills";
import SkillsStack from "../components/SkillsStack";
import StackHolder from "../components/StackHolder";

class SkillsDevelopment extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Skills Development</Text>
                    </View>
                    {skills_development.map((item, index) => (
                        <TouchableOpacity 
                        key={index}
                        onPress={() => this.props.navigation.navigate('SkillDetails',
                            {
                                //     name: this.props.name,
                                //     description: this.props.description,
                                //     when: this.props.when,
                                //     where: this.props.where,
                                //     who: this.props.who,
                                //     remainingSlot: this.props.remainingSlot,
                                //     about: this.props.about,
                                //     contact: this.props.contact
                                name: item.name,
                                description: item.description,
                                when: item.when,
                                where: item.where,
                                who: item.who,
                                remainingSlot: item.remainingSlot,
                                about: item.about,
                                contact: item.contact
                            })}>
                            <View style={styles.skillContainer}>
                                <View style={styles.skillTitleContainer}>
                                    <Text
                                        style={styles.skillTitle}>{item.name}</Text>
                                </View>
                                <View style={styles.skillDescriptionContainer}>
                                    <Text
                                        numberOfLines={3}
                                        style={styles.skillDescription}>{item.description}</Text>
                                </View>
                                <View style={{
                                    width: "100%", height: 1, backgroundColor: '#e1e1e1',
                                    marginVertical: 15
                                }} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            // <View>
            //     <View style={{ height: 56, width: "100%", backgroundColor: "#FF5A5F", flexDirection: 'row', alignItems: 'center' }}>
            //         <MenuIcon />
            //         <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Yondu Lounge</Text>
            //         <NotificationIcon />
            //     </View>
            //     <View style={{ flex: 1 }}>

            //         {skills_development.map((item, index) => (
            //             <StackHolder
            //                 name={item.name}
            //                 description={item.description}
            //                 when={item.when}
            //                 where={item.where}
            //                 who={item.who}
            //                 remainingSlot={item.remainingSlot}
            //                 about={item.about}
            //                 contact={item.contact}
            //                 key={index} />

            //         ))}
            //     </View>
            // </View>


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
        fontSize: 14
    },
})

export default SkillsDevelopment;

{/* <ScrollView>
<View style={styles.container}>
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Skills Development </Text>
    </View>
    {skills_development.map((item, index) => (
        <SkillsStack
            name={item.name}
            description={item.description}
            when={item.when}
            where={item.where}
            who={item.who}
            remainingSlot={item.remainingSlot}
            about={item.about}
            contact={item.contact}
            key={index}
        />
    ))}

</View>
</ScrollView > */}