import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LogBox} from "react-native";
import {HomeScreen} from "./screens/HomeScreen";
import {MovieScreen} from "./screens/MovieScreen";
import {PersonScreen} from "./screens/PersonScreen";


const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

/**
 * This is the entry point to each app page you want.
 */
export default function MovieAppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
                <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen}/>
                <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
