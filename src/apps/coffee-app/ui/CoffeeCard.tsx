import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/solid';
import {PlusIcon} from 'react-native-heroicons/outline';
import {useNavigation} from "@react-navigation/native";
import {themeColors} from "../theme/CoffeeTheme";
import {Coffee} from "../data/FakeData";

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

            <Image
                // @ts-ignore
                source={item.image}
                style={{
                    width: 140,
                    height: 140,
                    alignSelf: 'center',
                    marginTop: 15,
                }}
            />


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

                    {/* Volume of this item. */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: 14,
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 16,
                                color: 'white',
                                fontWeight: '600',
                                opacity: 0.6,
                            }}
                        >
                            Volume
                        </Text>
                        <Text
                            style={{
                                fontSize: 16,
                                lineHeight: 16,
                                color: 'white',
                                fontWeight: '600',
                                marginLeft: 4
                            }}
                        > {item.volume}</Text>
                    </View>

                </View>

                {/*The row at the bottom of the coffee card*/}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    {/*The price*/}
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 18,
                            lineHeight: 18
                        }}
                    >$ {item.price}</Text>

                    {/*The key for adding this item to cart.*/}
                    <TouchableOpacity
                        onPress={() => {
                            // @ts-ignore
                            navigation.navigate('Product', {...item})
                        }}
                        style={{
                            padding: 14,
                            backgroundColor: 'rgb(245 245 245)',
                            borderRadius: 100
                        }}
                    >
                        <PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark}/>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}
