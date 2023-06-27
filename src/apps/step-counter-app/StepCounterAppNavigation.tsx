import {StyleSheet, View} from 'react-native'
import React from 'react'
import {StatusBar} from "expo-status-bar";
import {Value} from "./Value";
import RingProgress from "./RingProgress";
import {useHealthData} from "./UseHealthData";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 12
    },
    valuesRow: {
        flexDirection: 'row',
        gap: 50,
        flexWrap: 'wrap',
        marginTop: 50,
    }
});

const STEPS_GOAL: number = 10_000;

export default function StepCounterAppNavigation() {

    const {steps, flights, distance} = useHealthData(new Date(2023, 5, 26));

    return (
        <View style={styles.container}>

            <RingProgress radius={120} strokeWidth={25} progress={steps / STEPS_GOAL}/>

            <View style={styles.valuesRow}>
                <Value label="Steps" value={steps.toString()}/>
                <Value label="Distance" value={`${(distance / 1000).toFixed(2)} km`}/>
                <Value label="Flights Climbed" value={flights.toString()}/>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}
