import {View} from 'react-native'
import React from 'react'
import SVG, {Circle} from "react-native-svg";

type RingProgressProps = {
    radius?: number;
    strokeWidth?: number;
    progress: number;
};

const color = "#EE0F55";

export default function RingProgress({radius = 90, strokeWidth = 18, progress}: RingProgressProps) {

    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    return (
        <View style={{
            width: radius * 2,
            height: radius * 2,
            alignSelf: 'center',
        }}>

            <SVG>
                {/*Background circle*/}
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    opacity={0.2}
                />
                {/*Foreground circle*/}
                <Circle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeDasharray={[circumference * progress, circumference]}
                    strokeLinecap='round'
                    rotation="-90"
                    originX={radius}
                    originY={radius}
                />
            </SVG>
        </View>
    );
};
