import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LogBox, View} from "react-native";
import {HomeScreen} from "./HomeScreen";
import {themeColors} from "../../common/CoffeeTheme";
import {
    HomeIcon as HomeOutline,
    HeartIcon as HeartOutline,
    ShoppingBagIcon as ShoppingBagOutline
} from "react-native-heroicons/outline";
import {
    HomeIcon as HomeSolid,
    HeartIcon as HeartSolid,
    ShoppingBagIcon as ShoppingBagSolid
} from "react-native-heroicons/solid";
import {ProductScreen} from "./ProductScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

/**
 * This is the entry point to the coffee app.
 */
export const CoffeeAppNavigation = () => {


    const menuIcons = (route, focused) => {
        let icon;
        if (route.name === 'home') {
            icon = focused ? <HomeSolid size={30} color={themeColors.bgLight}/> :
                <HomeOutline size={30} strokeWidth={2} color="white"/>
        } else if (route.name === 'favorite') {
            icon = focused ? <HeartSolid size={30} color={themeColors.bgLight}/> :
                <HeartOutline size={30} strokeWidth={2} color="white"/>
        } else if (route.name === 'cart') {
            icon = focused ? <ShoppingBagSolid size={30} color={themeColors.bgLight}/> :
                <ShoppingBagOutline size={30} strokeWidth={2} color="white"/>
        }
        let buttonClass = focused ? 'bg-white' : '';

        return (
            <View className={`flex items-center rounded-full p-3 shadow ${buttonClass}`}>
                {icon}
            </View>
        )
    }

    const HomeTabs = () => {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => menuIcons(route, focused),
                    tabBarStyle: {
                        height: 60,
                        marginBottom: 10,
                        borderRadius: 50,
                        backgroundColor: themeColors.bgLight,
                        marginHorizontal: 20,
                        position: 'absolute'
                    }
                })}
            >
                <Tab.Screen name="home" component={HomeScreen}/>
                <Tab.Screen name="favorite" component={HomeScreen}/>
                <Tab.Screen name="cart" component={HomeScreen}/>
            </Tab.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                contentStyle: {backgroundColor: 'white'}
            }}>
                <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs}/>
                <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

