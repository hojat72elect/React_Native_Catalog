import React, {useEffect, useMemo} from "react";
import {useFonts} from "@use-expo/font";
import {DarkTheme, DefaultTheme, Font, LightTheme} from "./themes";
import {ThemeProvider} from "styled-components/native";
import {NavigationContainer} from "@react-navigation/native";
import Router from "./views/index.routes";
import {store} from "./store";
import {Provider} from "react-redux";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {enableScreens} from "react-native-screens";
import {useColorScheme} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {SafeComponent} from "./components";
import {useDidMountEffect} from "./services/utils";

enableScreens();

export const DatingAppNavigation = () => {
    let [fontsLoaded] = useFonts({
        [Font.GilroyBold]: require("./assets/fonts/Gilroy-Bold.ttf"),
        [Font.GilroyExtraBold]: require("./assets/fonts/Gilroy-ExtraBold.ttf"),
        [Font.GilroyLight]: require("./assets/fonts/Gilroy-Light.ttf"),
        [Font.GilroyMedium]: require("./assets/fonts/Gilroy-Medium.ttf"),
        [Font.GilroyRegular]: require("./assets/fonts/Gilroy-Regular.ttf"),
        [Font.GilroySemiBold]: require("./assets/fonts/Gilroy-SemiBold.ttf"),
    });

    const colorScheme = useColorScheme();
    const theme = useMemo(() => {
        if (!colorScheme) return DefaultTheme;
        return colorScheme === "dark" ? DarkTheme : LightTheme;
    }, [colorScheme]);

    useEffect(() => {
        // Wait for the assets to load before hiding the SplashScreen
        SplashScreen.preventAutoHideAsync();
    }, []);

    useDidMountEffect(() => {
        if (fontsLoaded) setTimeout(SplashScreen.hideAsync, 100);
    }, [fontsLoaded]);

    return (
        <SafeAreaProvider>
            <ThemeProvider theme={theme}>
                <SafeComponent request={{loading: !fontsLoaded, data: true}}>
                    <Provider store={store}>
                        <StatusBar style="dark"/>
                        <NavigationContainer theme={theme as any}>
                            <Router/>
                        </NavigationContainer>
                    </Provider>
                </SafeComponent>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}


