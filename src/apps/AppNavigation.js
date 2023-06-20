import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LogBox} from "react-native";
import {HomeScreen} from "./movie-app/HomeScreen";


const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

/**
 * This is the entry point to each app page you want.
 */
export default function AppNavigation() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

