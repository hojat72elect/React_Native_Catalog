import {View, StyleSheet, Text} from 'react-native'
import React, {useState} from 'react'
import {useHealthData} from "./hooks/useHealthData";
import {AntDesign} from '@expo/vector-icons';
import {RingProgress} from "./components/RingProgress";
import {Value} from "./components/Value";
import {StatusBar} from "expo-status-bar";

const STEPS_GOAL: number = 10_000;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        padding: 12,
    },
    values: {
        flexDirection: 'row',
        gap: 25,
        flexWrap: 'wrap',
        marginTop: 100,
    },
    datePicker: {
        alignItems: 'center',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    date: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
        marginHorizontal: 20,
    },
});

export default function StepCounterAppNavigation() {

    const [date, setDate] = useState(new Date());
    const {steps, flights, distance} = useHealthData(date);

    const changeDate = (numDays: number) => {
        const currentDate = new Date(date); // first make a copy of our current date
        // update the date by adding the numDays to it
        currentDate.setDate(currentDate.getDate() + numDays);
        setDate(currentDate); //update the state that refers to date
    };

    return (
        <View style={styles.container}>
            <View style={styles.datePicker}>
                <AntDesign
                    onPress={() => changeDate(-1)}
                    name="right"
                    size={20}
                    color="#C3FF53"
                />
                <Text style={styles.date}>{date.toDateString()}</Text>

                <AntDesign
                    onPress={() => changeDate(1)}
                    name="right"
                    size={20}
                    color="#C3FF53"
                />
            </View>
            <RingProgress
                radius={150}
                strokeWidth={50}
                progress={steps / STEPS_GOAL}
            />
            <View style={styles.values}>
                <Value label="Steps" value={steps.toString()}/>
                <Value label="Distance" value={`${(distance / 1000).toFixed(2)} km`}/>
                <Value label="Flights Climbed" value={flights.toString()}/>
            </View>
            <StatusBar style="auto"/>

        </View>
    );
}
