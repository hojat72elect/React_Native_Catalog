import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LogBox} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

export const WeatherChannelAppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}