import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {StatusBar} from "expo-status-bar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 12
    },
    label: {
        color: 'white',
        fontSize: 20,
    },
    value: {
        fontSize: 34,
        color: '#AFB3BE',
        fontWeight: "500",
    },
    valuesRow: {
        flexDirection: 'row',
        gap: 50,
        flexWrap: 'wrap',
    }
});

type ValueProps = {
    label: string;
    value: string;
};

const Value = ({label, value}: ValueProps) => (
    <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

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
