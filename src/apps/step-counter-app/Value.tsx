import {StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    label: {
        color: 'white',
        fontSize: 20,
    },
    value: {
        fontSize: 34,
        color: '#AFB3BE',
        fontWeight: "500",
    },
});

type ValueProps = {
    label: string;
    value: string;
};

export const Value = ({label, value}: ValueProps) => (
    <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);