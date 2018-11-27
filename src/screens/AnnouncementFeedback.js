import React, { Component } from 'react';
import Feedback from "../components/Feedback";

class AnnouncementFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    header:null
}

  render() {
    let name = this.props.navigation.getParam("itemPassed", "no name")
    return (
      <Feedback subject={name}/>
    );
  }
}

export default AnnouncementFeedback;
