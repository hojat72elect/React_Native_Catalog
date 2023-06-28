import {StyleSheet, View} from 'react-native'
import React from 'react'
import {StatusBar} from "expo-status-bar";
import {Value} from "./Value";
import RingProgress from "./RingProgress";

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

export default function StepCounterAppNavigation() {

    return (
        <View style={styles.container}>

            <RingProgress radius={120} strokeWidth={25} progress={0.18}/>

            <View style={styles.valuesRow}>
                <Value label="Steps" value="789"/>
                <Value label="Distance" value="2.56 km"/>
                <Value label="Flights Climbed" value="45"/>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}
