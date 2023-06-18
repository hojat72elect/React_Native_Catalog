import React, {useEffect} from 'react'
import {Dimensions, Platform, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import {useRoute} from "@react-navigation/native";
import {ChevronLeftIcon, HeartIcon} from "react-native-heroicons/outline";
import {styles} from "../../common/themes/Theme";

let {width, height} = Dimensions.get('window');
const isIos = Platform.OS === 'ios';
const topMargin = isIos ? '' : ' mt-7';

export const MovieScreen = () => {

    const {params: item} = useRoute();
    useEffect(() => {
        // Get the info about this specific movie
    }, [item]);


    return (
        <View className="flex-1 bg-neutral-900">
            <SafeAreaView
                className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}>
                <TouchableOpacity style={styles.background} className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <HeartIcon size="35" color="white"/>
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView
                contentContainerStyle={{paddingBottom: 20}}
                className="w-full"
            >


            </ScrollView>
        </View>
    )
}

