import {Component} from "react";
import {View} from "react-native";

export class Food extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const x = this.props.position[0];
        const y = this.props.position[1];

        return (
            <View style={{
                width: this.props.size,
                height: this.props.size,
                backgroundColor: 'green',
                position: 'absolute',
                left: x * this.props.size,
                top: y * this.props.size
            }}/>
        )
    }
}
