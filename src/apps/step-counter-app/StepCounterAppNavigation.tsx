import {StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {StatusBar} from "expo-status-bar";
import {Value} from "./Value";
import RingProgress from "./RingProgress";
import AppleHealthKit, {HealthInputOptions, HealthKitPermissions, HealthUnit} from 'react-native-health';

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
            read: [
                AppleHealthKit.Constants.Permissions.Steps,
                AppleHealthKit.Constants.Permissions.FlightsClimbed,
                AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
            ],
            write: [],
        }
    };

    const [hasPermissions, setHasPermissions] = useState(false);
    const [steps, setSteps] = useState(0);
    const [flights, setFlights] = useState(0);
    const [distance, setDistance] = useState(0);

    // initializing the permissions when app opens up
    useEffect(() => {
        AppleHealthKit.initHealthKit(permissions, (error) => {
            if (error) {
                console.error(`error while initializing apple health : ${error}`)
                throw new Error(error);
            }
            setHasPermissions(true);
        })
    }, []);

    useEffect(() => {
        if (!hasPermissions)
            return;

        const options: HealthInputOptions = {
            date: new Date().toISOString(),
            includeManuallyAdded: false
        };
        AppleHealthKit.getStepCount(options, (error, results) => {
            if (error) {
                console.error(`Error while getting number of steps on iOS : ${error}`);
                throw new Error(error);
            }
            setSteps(results.value);

        });
        AppleHealthKit.getFlightsClimbed(options, (error, results) => {
            if (error) {
                console.error(`Error while getting number of flights climbed on iOS : ${error}`);
                throw new Error(error);
            }
            setFlights(results.value);

        });
        AppleHealthKit.getDistanceWalkingRunning(options, (error, results) => {
            if (error) {
                console.error(`Error while getting distance walked/ran on iOS : ${error}`);
                throw new Error(error);
            }
            setDistance(results.value);

        });


    }, [hasPermissions]);


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
