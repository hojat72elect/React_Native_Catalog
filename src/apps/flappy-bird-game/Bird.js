import React, {Component} from 'react'
import {Text, View} from "react-native";

export class Bird extends Component {
    render() {
        const width = this.props.size[0];
        const height = this.props.size[1];
        const x = this.props.body.position.x - width / 2;
        const y = this.props.body.position.y - height / 2;


        return (
            <View style={{
                position: 'absolute',
                top: y,
                left: x,
                width: width,
                height: height,
                backgroundColor: this.props.color
            }}

            ></View>
        )
    }
}
