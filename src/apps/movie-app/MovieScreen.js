import React, {useEffect} from 'react'
import {SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {styles} from "../../common/themes/Theme";

export const MovieScreen = () => {

    const {params: item} = useRoute();
    useEffect(() => {
        // Get the info about this specific movie
    }, [item]);


    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900"
        >

            {/*Back button and the movie poster*/}
            <View className="w-full">
                <SafeAreaView className="absolute z-20 w-full flex-row justify-between items-center px-4">
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1">
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        </ScrollView>
    )
}

