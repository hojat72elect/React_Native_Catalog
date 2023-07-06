import {View, Text, Image, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {useNavigation, useRoute} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {ArrowLeftCircleIcon, PlusIcon, MinusIcon, ShoppingBagIcon} from "react-native-heroicons/outline";
import {HeartIcon, StarIcon} from "react-native-heroicons/solid";
import {themeColors} from "./CoffeeTheme";

export const ProductScreen = () => {

    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [orderSize, setOrderSize] = useState('small');

    return (
        <View style={{
            flex: 1
        }}>
            <StatusBar style="light"/>
            <Image
                source={require('../../../assets/images/beansBackground2.png')}
                style={{
                    width: '100%',
                    height: 120,
                    borderBottomLeftRadius: 50,
                    borderBottomRightRadius: 50,
                    position: 'absolute'
                }}
            />
            <View style={{marginTop: 24}}>

                {/*The row containing back button and the like button.*/}
                <View
                    style={{
                        marginHorizontal: 8,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: 'white',
                            padding: 6,
                        }}
                    >
                        <HeartIcon size={24} color="white"/>
                    </TouchableOpacity>
                </View>

                {/*@ts-ignore*/}
                <Image source={item.image}
                       style={{
                           marginTop: -30,
                           height: 120,
                           width: 120,
                           alignSelf: 'center'
                       }}
                />

                {/*Rate of the coffee item out of 5*/}
                <View
                    style={{
                        width: 70,
                        height: 40,
                        backgroundColor: themeColors.bgLight,
                        flexDirection: 'row',
                        marginHorizontal: 14,
                        alignItems: 'center',
                        borderRadius: 19,
                        paddingVertical: 6,
                        paddingHorizontal: 12,
                        justifyContent: 'center',
                    }}
                >
                    <StarIcon size="15" color="white"/>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '600',
                            color: 'white',
                            marginLeft: 8
                        }}
                        /*@ts-ignore*/
                    >{item?.stars}</Text>
                </View>

                {/*The row containing name and price of the coffee item.*/}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginHorizontal: 14,
                        alignItems: 'center',
                        marginTop: 22
                    }}
                >
                    <Text style={{
                        color: themeColors.text,
                        fontSize: 30,
                        lineHeight: 30,
                        fontWeight: '600',
                        /*@ts-ignore*/
                    }}>{item.name}</Text>
                    <Text style={{
                        color: themeColors.text,
                        fontSize: 18,
                        lineHeight: 18,
                        fontWeight: '600',
                        /*@ts-ignore*/
                    }}>$ {item.price}</Text>
                </View>

                {/*The row for choosing coffee size*/}
                <View
                    style={{
                        marginHorizontal: 14,
                        marginTop: 18
                    }}
                >
                    <Text
                        style={{
                            color: themeColors.text,
                            fontSize: 18,
                            lineHeight: 18,
                            fontWeight: 'bold'
                        }}>
                        Coffee size
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 8,
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => setOrderSize('small')}
                            style={{
                                backgroundColor: orderSize === 'small' ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)',
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                borderRadius: 80,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: orderSize === 'small' ? 'white' : "rgb(55 65 81)",
                                }}
                            >Small</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setOrderSize('medium')}
                            style={{
                                backgroundColor: orderSize === 'medium' ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)',
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                borderRadius: 80,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text
                                style={{
                                    color: orderSize === 'medium' ? "white" : "rgb(55 65 81)",

                                }}
                            >Medium</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setOrderSize('large')}
                            style={{
                                backgroundColor: orderSize === 'large' ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)',
                                paddingHorizontal: 25,
                                paddingVertical: 10,
                                borderRadius: 80,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Text className={orderSize === 'large' ? "text-white" : "text-gray-700"}>Large</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View className="mx-4 space-y-2 h-28 mt-4">
                    <Text style={{color: themeColors.text}} className="text-lg font-bold">
                        About
                    </Text>
                    <Text className="text-gray-600">
                        {/*@ts-ignore*/}
                        {item.desc}
                    </Text>
                </View>
                <View className="flex-row justify-between items-center mx-4 mb-2 mt-4">
                    <View className="flex-row items-center space-x-1">
                        <Text className="text-base text-gray-700 font-semibold opacity-60">Volume</Text>
                        <Text className="text-base text-black font-semibold">
                            {/*@ts-ignore*/}
                            {item.volume}
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-4 border border-gray-500 rounded-full py-1 px-4">
                        <TouchableOpacity>
                            <MinusIcon size={20} color={themeColors.text} strokeWidth={3}/>
                        </TouchableOpacity>
                        <Text style={{color: themeColors.text}} className="font-extrabold text-lg">2</Text>
                        <TouchableOpacity>
                            <PlusIcon size={20} color={themeColors.text} strokeWidth={3}/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Buy button*/}
                <View className="flex-row justify-between items-center mx-4 mt-4">
                    <TouchableOpacity className="p-4 rounded-full border border-gray-400 ">
                        <ShoppingBagIcon size={30} color="gray"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: themeColors.bgLight}}
                                      className="p-5 rounded-full flex-1 ml-3">
                        <Text className="text-center text-base font-semibold text-white">
                            Buy now
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
