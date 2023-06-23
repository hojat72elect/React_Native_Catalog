import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {useNavigation} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {ArrowLeftCircleIcon, PlusIcon, MinusIcon} from "react-native-heroicons/outline";
import {HeartIcon, StarIcon} from "react-native-heroicons/solid";
import {themeColors} from "../../common/CoffeeTheme";

export const ProductScreen = (props) => {

    const item = props.route.params;
    const navigation = useNavigation();
    const [orderSize, setOrderSize] = useState('small');

    return (
        <View className="flex-1">
            <StatusBar style="light"/>
            <Image
                source={require('../../../assets/images/beansBackground2.png')}
                style={{height: 100, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}
                className="w-full absolute"
            />
            <View className="space-y-4 ">
                <View className="mx-4 flex-row justify-between items-center">
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity className="rounded-full border-2 border-white p-2">
                        <HeartIcon size={24} color="white"/>
                    </TouchableOpacity>
                </View>
                <View
                    className="flex-row justify-center"
                    style={{
                        shadowColor: themeColors.bgDark,
                        shadowRadius: 30,
                        shadowOffset: {width: 0, height: 30},
                        shadowOpacity: 0.9
                    }}
                >
                    <Image source={item.image} className="-mt-9 h-28 w-28"/>
                </View>
                <View style={{backgroundColor: themeColors.bgLight}}
                      className="flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90">
                    <StarIcon size="15" color="white"/>
                    <Text className="text-base font-semibold text-white">{item.stars}</Text>
                </View>
                <View className="mx-4 flex-row justify-between items-center">
                    <Text style={{color: themeColors.text}} className="text-3xl font-semibold">{item.name}</Text>
                    <Text style={{color: themeColors.text}} className="text-lg font-semibold">$ {item.price}</Text>
                </View>
                <View className="mx-4 space-y-2">
                    <Text style={{color: themeColors.text}} className="text-lg font-bold">
                        Coffee size
                    </Text>
                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            onPress={() => setOrderSize('small')}
                            className="px-8 py-3 rounded-full"
                            style={{backgroundColor: orderSize === 'small' ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)'}}
                        >
                            <Text className={orderSize === 'small' ? "text-white" : "text-gray-700"}>Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setOrderSize('medium')}
                            className="px-8 py-3 rounded-full"
                            style={{backgroundColor: orderSize === 'medium' ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)'}}
                        >
                            <Text className={orderSize === 'medium' ? "text-white" : "text-gray-700"}>Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setOrderSize('large')}
                            className="px-8 py-3 rounded-full"
                            style={{backgroundColor: orderSize === 'large' ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)'}}
                        >
                            <Text className={orderSize === 'large' ? "text-white" : "text-gray-700"}>Large</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View className="mx-4 space-y-2 h-28">
                    <Text style={{color: themeColors.text}} className="text-lg font-bold">
                        About
                    </Text>
                    <Text className="text-gray-600">
                        {item.desc}
                    </Text>
                </View>
                <View className="flex-row justify-between items-center mx-4 mb-2">
                    <View className="flex-row items-center space-x-1">
                        <Text className="text-base text-gray-700 font-semibold opacity-60">Volume</Text>
                        <Text className="text-base text-black font-semibold">
                            {item.volume}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-4 border border-gray-500 rounded-full py-1 px-4">
                        <TouchableOpacity>
                            <MinusIcon size={20} color={themeColors.text} strokeWidth={3}/>
                        </TouchableOpacity>
                        <Text style={{color:themeColors.text}} className="font-extrabold text-lg">2</Text>
                        <TouchableOpacity>
                            <PlusIcon size={20} color={themeColors.text} strokeWidth={3}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
