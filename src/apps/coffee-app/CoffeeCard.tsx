import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/solid';
import {PlusIcon} from 'react-native-heroicons/outline';
import {useNavigation} from "@react-navigation/native";
import {themeColors} from "./CoffeeTheme";
import {Coffee} from "./FakeData";

const {width, height} = Dimensions.get('window');

export type CoffeeCardProps = {
    item: Coffee;
};

export const CoffeeCard = ({item}: CoffeeCardProps) => {

    const navigation = useNavigation();

    return (
        <View style={{
            borderRadius: 40,
            backgroundColor: themeColors.bgDark,
            height: height * 0.57,
            width: width * 0.65,
        }}>
            {/*The picture of the chosen coffee on top of the card.*/}
            <View
                style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                <Image
                    // @ts-ignore
                    source={item.image}
                    style={{
                        width: 140,
                        height: 140,
                    }}
                />
            </View>

            <View
                style={{
                    paddingHorizontal: 10,
                    flex: 1,
                    justifyContent: 'space-between',
                    flexDirection: 'column'
                }}
            >
                <View
                    style={{
                        marginTop: 14
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            lineHeight: 25,
                            color: 'white',
                            fontWeight: '600'
                        }}
                    >
                        {item.name}
                    </Text>
                    {/* The score of this item out of 5. */}
                    <View
                        style={{
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 16,
                            paddingVertical: 8,
                            paddingHorizontal: 12,
                            width: 60,
                            marginTop: 18,
                            justifyContent: 'center',
                        }}
                    >
                        <StarIcon size="15" color="white"/>
                        <Text
                            style={{
                                fontSize: 18,
                                lineHeight: 18,
                                fontWeight: '600',
                                color: 'white',
                                marginLeft: 4
                            }}
                        >{item.stars}</Text>
                    </View>
                    <View className="flex-row space-x-1 mt-3">
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
                }} className="flex-row justify-between items-center mb-2">
                    <Text className="text-white font-bold text-lg">$ {item.price}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            navigation.navigate('Product', {...item})
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