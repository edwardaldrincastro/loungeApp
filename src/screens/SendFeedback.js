import React, { Component } from 'react';
import Feedback from "../components/Feedback";
import Blank from "./Blank";

class SendFeedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    drawerLabel: <Blank/>
  }

  render() {
    return (
      <Feedback />
    );
  }
}

export default SendFeedback;
