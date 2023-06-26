import {View, Text} from 'react-native'
import React from 'react'

type RingProgressProps = {
    radius?: number;
};

const color = "#EE0F55";

export default function RingProgress({radius = 50}: RingProgressProps) {
    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            backgroundColor: color,
            alignSelf: 'center'
        }}>


        </View>
    )
}
