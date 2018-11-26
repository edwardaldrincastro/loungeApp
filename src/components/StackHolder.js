import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SkillsDevelopment from "../screens/SkillsDevelopment";
import SkillsStack from "./SkillsStack";

class StackHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let name = this.props.name
        let description = this.props.description
        let when = this.props.when
        let where = this.props.where
        let who = this.props.who
        let remainingSlot = this.props.remainingSlot
        let about = this.props.about
        let contact = this.props.contact


        return (
            <View style={{ flex: 1 }}>
                <SkillsStack
                    name= {name}
                    description= {description}
                    when= {when}
                    where= {where}
                    who= {who}
                    remainingSlot= {remainingSlot}
                    about= {about}
                    contact= {contact} />
            </View>
        );
    }
}

export default StackHolder;
