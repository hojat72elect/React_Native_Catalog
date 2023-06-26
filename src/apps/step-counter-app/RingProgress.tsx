import {View} from 'react-native'
import React from 'react'
import SVG, {Circle} from "react-native-svg";

type RingProgressProps = {
    radius?: number;
};

const color = "#EE0F55";

export default function RingProgress({radius = 50}: RingProgressProps) {
    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center'
        }}>

            <SVG>
                <Circle r={radius} fill={color}/>
            </SVG>
        </View>
    );
};
