import AppleHealthKit, {
    HealthInputOptions,
    HealthKitPermissions,
} from 'react-native-health';
import {useEffect, useState} from "react";
import {Platform} from "react-native";
import {initialize, readRecord, readRecords, requestPermission} from "react-native-health-connect";
import {TimeRangeFilter} from "react-native-health-connect/lib/typescript/types/base.types";

const permissions: HealthKitPermissions = {
    permissions: {
        read: [
            AppleHealthKit.Constants.Permissions.Steps,
            AppleHealthKit.Constants.Permissions.FlightsClimbed,
            AppleHealthKit.Constants.Permissions.DistanceWalkingRunning,
        ],
        write: []
    },
};

export const useHealthData = (date: Date) => {

    const [hasPermissions, setHasPermissions] = useState(false);
    const [steps, setSteps] = useState(0);
    const [flights, setFlights] = useState(0);
    const [distance, setDistance] = useState(0);

    // iOS HealthKit
    useEffect(() => {
        if (Platform.OS !== 'ios')
            return;

        AppleHealthKit.isAvailable((error, isAvailable) => {
            if (error) {
                console.error('Error while checking the availability of Helth kit on iOS');
                return;
            }
            if (!isAvailable) {
                console.error('Apple Health kit is not available on this device!');
                return;
            }

            AppleHealthKit.initHealthKit(permissions, (error) => {
                if (error) {
                    console.error("Error while granting the permissions on iOS health kit.");
                    return;
                }
                setHasPermissions(true);
            });
        });
    }, []);

    useEffect(() => {
        if (!hasPermissions)
            return;

        const options: HealthInputOptions = {
            date: date.toISOString(),
            includeManuallyAdded: false,
        };

        AppleHealthKit.getStepCount(options, (error, results) => {
            if (error) {
                console.error("Error while getting the steps count on iOS");
                return;
            }
            setSteps(results.value);
        });
        AppleHealthKit.getFlightsClimbed(options, (error, results) => {
            if (error) {
                console.error("Error while getting the flights climbed on iOS.");
                return;
            }
            setFlights(results.value);
        });
        AppleHealthKit.getDistanceWalkingRunning(options, (error, results) => {
            if (error) {
                console.error("Error while getting the distance walked or ran on iOS");
                return;
            }
            setDistance(results.value);
        });
    }, [hasPermissions, date]);

    // Android health connect
    const readSampleData = async () => {
        // initialize the client
        const isInitialized = await initialize();
        if (!isInitialized)
            return;

        // request permission
        await requestPermission([
            {accessType: 'read', recordType: 'Steps'},
            {accessType: 'read', recordType: 'Distance'},
            {accessType: 'read', recordType: 'FloorsClimbed'},
        ]);

        const timeRangeFilter: TimeRangeFilter = {
            operator: 'between',
            startTime: new Date(date.setHours(0, 0, 0, 0)).toISOString(),
            endTime: new Date(date.setHours(23, 59, 59, 999)).toISOString(),
        };

        // steps
        const steps = await readRecords('Steps', {timeRangeFilter});
        const totalSteps = steps.reduce((sum, current) => sum + current.count, 0);
        setSteps(totalSteps);

        // Distance
        const distance = await readRecords('Distance', {timeRangeFilter});
        const totalDistance = distance.reduce(
            (sum, current) => sum + current.distance.inMeters,
            0
        );
        setDistance(totalDistance);

        // Floors climbed
        const floorsClimbed = await readRecords('FloorsClimbed', {
            timeRangeFilter,
        });
        const totalFloors = floorsClimbed.reduce((sum, current) => sum + current.floors, 0);
        setFlights(totalFloors);
    };

    useEffect(() => {
        if (Platform.OS !== 'android')
            return;
        readSampleData();
    }, [date]);

    return {
        steps, flights, distance,
    };

};