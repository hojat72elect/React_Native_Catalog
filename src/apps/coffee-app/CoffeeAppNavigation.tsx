import React from 'react'
import {NavigationContainer, Route} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from "react-native";
import {HomeScreen} from "./screens/HomeScreen";
import {
    HeartIcon as HeartOutline,
    HomeIcon as HomeOutline,
    ShoppingBagIcon as ShoppingBagOutline
} from "react-native-heroicons/outline";
import {
    HeartIcon as HeartSolid,
    HomeIcon as HomeSolid,
    ShoppingBagIcon as ShoppingBagSolid
} from "react-native-heroicons/solid";
import {ProductScreen} from "./screens/ProductScreen";
import {themeColors} from "./theme/CoffeeTheme";

// The stack navigator (behaves like a stack)
const Stack = createNativeStackNavigator();
// The tab navigator (bottom tabs)
const Tab = createBottomTabNavigator();

/**
 * The entry point to the coffee app.
 */
export const CoffeeAppNavigation = () => {

    /**
     * The returned {Element} is  a {View} containing the icon for each tab.
     *
     * @param route : any route referred to by any of the bottom tabs.
     * @param focused : boolean whether that tab is currently chosen or not.
     */
    const bottomTabIcons = (route: Route<any>, focused: boolean) => {
        // the icon of each tab
        let icon: React.ReactElement | null = null;
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
        let iconBackground = focused ? 'white' : undefined;

        return (
            <View
                style={{
                    alignItems: 'center',
                    borderRadius: 100,
                    padding: 8,
                    backgroundColor: iconBackground,
                }}
            >
                {icon}
            </View>
        )
    }

    /**
     * The TabBar at the bottom of the "coffee app" main page.
     */
    const BottomTabBar = () => {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => bottomTabIcons(route, focused),
                    tabBarStyle: {
                        height: 60,
                        marginVertical: 5,
                        borderRadius: 50,
                        backgroundColor: themeColors.bgLight,
                        marginHorizontal: 10,
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
                <Stack.Screen name="Home" options={{headerShown: false}} component={BottomTabBar}/>
                <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

