import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LogBox} from "react-native";
import {HomeScreen} from "./HomeScreen";


const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

/**
 * This is the entry point to the coffee app.
 */
export const CoffeeAppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

