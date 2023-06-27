import AppleHealthKit, {HealthInputOptions, HealthKitPermissions} from "react-native-health";
import {useEffect, useState} from "react";

export const useHealthData = (date: Date) => {

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
            date: date.toISOString(),
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

    return {
        steps, flights, distance,
    };
};