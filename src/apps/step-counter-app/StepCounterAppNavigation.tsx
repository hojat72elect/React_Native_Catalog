import {View, StyleSheet} from 'react-native'
import React, {useEffect, useState} from 'react'
import {StatusBar} from "expo-status-bar";
import {Value} from "./Value";
import RingProgress from "./RingProgress";
import AppleHealthKit, {HealthInputOptions, HealthKitPermissions} from 'react-native-health';

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

    const permissions: HealthKitPermissions = {
        permissions: {
            read: [AppleHealthKit.Constants.Permissions.Steps],
            write: [],
        }
    };

    const [hasPermissions, setHasPermissions] = useState(false);
    const [steps, setSteps] = useState(0);

    // initializing the permissions when app opens up
    useEffect(() => {
        AppleHealthKit.initHealthKit(permissions, (error) => {
            if (error) {
                console.error(`error while initializing apple health : ${error}`)
                throw  new Error(error);
            }
            setHasPermissions(true);
        })
    }, []);

    useEffect(() => {
        if (!hasPermissions)
            return;

        const options: HealthInputOptions = {
            date: new Date().toISOString(),
            includeManuallyAdded: false,
        };
        AppleHealthKit.getStepCount(options, (error, results) => {
            if (error) {
                console.error(`Error while getting number of steps on iOS : ${error}`);
                throw new Error(error);
            }
            setSteps(results.value);

        })


    }, [hasPermissions]);


    return (
        <View style={styles.container}>

            <RingProgress radius={120} strokeWidth={25} progress={steps / STEPS_GOAL}/>

            <View style={styles.valuesRow}>
                <Value label="Steps" value={steps.toString()}/>
                <Value label="Distance" value="0,75 Km"/>
                <Value label="Flights Climbed" value="12"/>
            </View>

            <StatusBar style="auto"/>
        </View>
    )
}
