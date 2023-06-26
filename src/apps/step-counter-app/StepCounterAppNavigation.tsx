import {View, StyleSheet} from 'react-native'
import React from 'react'
import {StatusBar} from "expo-status-bar";
import {Value} from "./Value";

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
    }
});

export default function StepCounterAppNavigation() {
    return (
        <View style={styles.container}>

            <View style={styles.valuesRow}>
                <Value label="Steps" value="1219"/>
                <Value label="Distance" value="0,75 Km"/>
                <Value label="Flights Climbed" value="12"/>
            </View>


            <StatusBar style="auto"/>
        </View>
    )
}
