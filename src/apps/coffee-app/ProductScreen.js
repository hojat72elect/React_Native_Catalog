import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {ArrowLeftCircleIcon} from "react-native-heroicons/outline";

export const ProductScreen = () => {

    const navigation = useNavigation();

    return (
        <View className="flex-1">
            <StatusBar style="light"/>
            <Image
                source={require('../../../assets/images/beansBackground2.png')}
                style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}
                className="w-full absolute"
            />
            <View className="space-y-4">
                <View className="mx-4 flex-row justify-between items-center">
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
