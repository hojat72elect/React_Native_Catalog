import React from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

export const Cast = ({cast}) => {

    const personName = "Hojat Ghasemi"
    const characterName = "Kaveh Ahangar"
    const navigation = useNavigation();

    return (
        <View className="my-6">
            <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {cast && cast.map((person, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            className="mr-4 items-center"
                            onPress={() => {
                                console.log("user clicked on an actor's pic");
                                navigation.navigate('Person');
                            }}
                        >
                            <View
                                className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                                <Image className="rounded-2xl h-24 w-20"
                                       source={require('../../../../assets/images/castImage1.png')}/>
                            </View>
                            <Text className="text-white text-xs mt-1">
                                {characterName.length > 10 ? characterName.slice(0, 10) + '...' : characterName}
                            </Text>
                            <Text className="text-neutral-400 text-xs mt-1">
                                {personName.length > 10 ? personName.slice(0, 10) + '...' : personName}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    )
}

