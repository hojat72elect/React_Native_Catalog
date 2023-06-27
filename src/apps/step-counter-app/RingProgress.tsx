import {View} from 'react-native'
import React, {useEffect} from 'react'
import SVG, {Circle} from "react-native-svg";
import Animated, {useAnimatedProps, useSharedValue, withTiming} from "react-native-reanimated";

type RingProgressProps = {
    radius?: number;
    strokeWidth?: number;
    progress: number;
};

const color = "#EE0F55";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function RingProgress({radius = 90, strokeWidth = 18, progress}: RingProgressProps) {

    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;

    const fill = useSharedValue(0);

    useEffect(() => {
        fill.value = withTiming(progress, {duration: 1500});
    }, [progress]);


    const animatedProps = useAnimatedProps(() => ({
        strokeDasharray: [circumference * fill.value, circumference],
    }));

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
                <AnimatedCircle
                    cx={radius}
                    cy={radius}
                    r={innerRadius}
                    strokeWidth={strokeWidth}
                    stroke={color}
                    strokeLinecap='round'
                    rotation="-90"
                    originX={radius}
                    originY={radius}
                    animatedProps={animatedProps}
                />
            </SVG>
        </View>
    );
};
