import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/solid';
import {PlusIcon} from 'react-native-heroicons/outline';
import {themeColors} from "../../common/CoffeeTheme";

const {width, height} = Dimensions.get('window');

export const CoffeeCard = ({item}) => {

    return (
        <View
            style={{
                borderRadius: 40,
                backgroundColor: themeColors.bgDark,
                height: height * 0.57,
                width: width * 0.65,
            }}
        >
            <View
                style={{
                    shadowColor: 'black',
                    shadowRadius: 30,
                    shadowOffset: {width: 0, height: 40},
                    shadowOpacity: 0.8,
                    marginTop: 15,
                }}
                className="flex-row justify-center">
                <Image
                    source={item.image}
                    className="h-40 w-40"
                />
            </View>
            <View className={`px-5 flex-1 justify-between`}>
                <View className="space-y-3 mt-3">
                    <Text className="text-3xl text-white font-semibold">
                        {item.name}
                    </Text>
                    <View style={{backgroundColor: 'rgba(255,255,255,0.2)'}}
                          className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16">
                        <StarIcon size="15" color="white"/>
                        <Text className="text-base font-semibold text-white">{item.stars}</Text>
                    </View>
                    <View className="flex-row space-x-1">
                        <Text className="text-base text-white font-semibold opacity-60">
                            Volume
                        </Text>
                        <Text className="text-base text-white font-semibold"> {item.volume}</Text>
                    </View>
                </View>


                <View style={{
                    backgroundColor: 'transparent',
                    shadowColor: themeColors.bgDark,
                    shadowRadius: 25,
                    shadowOffset: {width: 0, height: 40},
                    shadowOpacity: 0.8,
                }} className="flex-row justify-between items-center">
                    <Text className="text-white font-bold text-lg">$ {item.price}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("user bought a coffee")
                        }}
                        style={{
                            shadowColor: 'black',
                            shadowRadius: 40,
                            shadowOffset: {width: -20, height: -10},
                            shadowOpacity: 1,
                        }}
                        className="p-4 bg-neutral-100 rounded-full"
                    >
                        <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark}/>
                    </TouchableOpacity>
                </View>


            </View>

        </View>

    )
}