import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BackIcon } from "../utilities/icons/";
import CustomButton from "../components/Button";

class SkillDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    title: 'Skills Development',
    headerLeft: <BackIcon />,
    headerTitleStyle: {
      width: '100%',
      fontSize: 16,
      color: '#fff'
    },
  }
  render() {
    let name = this.props.navigation.getParam("name", "no name")
    let description = this.props.navigation.getParam("description", "no description")
    let when = this.props.navigation.getParam("when", "no when")
    let where = this.props.navigation.getParam("where", "no where")
    let who = this.props.navigation.getParam("who", "no who")
    let remainingSlot = this.props.navigation.getParam("remainingSlot", "no remainingSlot")
    let about = this.props.navigation.getParam("about", "no about")
    let contact = this.props.navigation.getParam("contact", "no contact")
    return (
      <View style={styles.container}>

        <View style={styles.titleContainer}>
          <Text style={styles.skillTitle}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.skillDescription}>{description}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.skillDetails}><Text style={styles.textBold}>When: </Text>{when}</Text>
          <Text style={styles.skillDetails}><Text style={styles.textBold}>Where: </Text>{where}</Text>
          <Text style={styles.skillDetails}><Text style={styles.textBold}>Who: </Text>{who}</Text>
          <Text style={styles.skillDetails}><Text style={styles.textBold}>Remaining Slot: </Text>{remainingSlot}</Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={styles.about}>{about}</Text>
        </View>
        <View style={styles.contactContainer}>
          <Text style={styles.contactTitle}>Ut enim ad minim <Text style={styles.textColored}>{contact}</Text></Text>
        </View>
        <View style={styles.buttonContainer}>

          <CustomButton pink text="Join" destination="SkillsDevelopment" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  textBold: {
    fontWeight: 'bold'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  skillTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flex: 2,
    maxHeight: 90
  },
  skillDescription: {
    fontSize: 18
  },
  contactTitle: {
    fontSize: 18
  },
  detailsContainer: {
    flex: 2,
  },
  skillDetails: {
    fontSize: 18
  },
  aboutContainer: {
    flex: 1,
  },
  about: {
    fontSize: 18
  },
  contactContainer: {
    flex: 1,
    marginTop: 15
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'center',
  },
})

export default SkillDetails;