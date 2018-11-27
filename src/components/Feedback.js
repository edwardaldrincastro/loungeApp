import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';
import CustomButton from '../components/Button';
import { MenuIcon, NotificationIcon } from "../utilities/icons";

class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let subject
        if (this.props.subject) {
            subject = (<Text style={styles.subjectText}>Re: {this.props.subject}</Text>)
        } else {
            subject = (
                <View style={styles.topicContainer}><Picker
                    selectedValue={this.state.language}
                    style={{
                        height: 50, width: "100%", marginVertical: 10,
                    }}
                    itemStyle={{ fontWeight: 'bold', }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="Select Subject" value="java" />
                    <Picker.Item label="Company Policy" value="js" />
                </Picker>
                </View>)
        }
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.headerContainer}>
                    <MenuIcon />
                    <Text style={styles.headerTitle}>Yondu Lounge</Text>
                    <NotificationIcon />
                </View>
                <View style={styles.container}>

                    <View style={styles.titleContainer}>

                        <Text style={styles.titleText}>Send Feedback </Text>
                    </View>
                    {subject}

                    <View
                        style={styles.inputFieldContainter}>
                        <TextInput
                            placeholder="Enter Feedback"
                            placeholderTextColor="#8d8d8d"
                            multiline={true}
                            style={styles.inputFieldText} />
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton pink text="Submit" destination="submit" />
                        <CustomButton text="Cancel" destination="back" />
                    </View>
                </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
    },
    headerContainer: {
        height: 56,
        backgroundColor: "#FF5A5F",
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold'
    },
    titleContainer: {
        flex: 0.5,
        justifyContent: 'center',
        paddingVertical: 20
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subjectText: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    topicContainer: {
        flex: 0.6,
        marginVertical: 10,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center'
    },
    inputFieldContainter: {
        flex: 4.4,
        backgroundColor: '#F7F7F7',
    },
    inputFieldText: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        textAlignVertical: "top",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 3,
        color: '#8d8d8d'
    },
    buttonContainer: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 40,
        justifyContent: 'center',
    },
})
export default Feedback;
