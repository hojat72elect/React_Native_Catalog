import React, {useEffect, useState} from 'react'
import {Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {styles} from "../../common/themes/Theme";
import {LinearGradient} from "expo-linear-gradient";

let {width, height} = Dimensions.get('window');
const isIos = Platform.OS === 'ios';
const topMargin = isIos ? '' : ' mt-7';

export const MovieScreen = () => {

    const {params: item} = useRoute();
    const [isFavorite, toggleFavorite] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
        // Get the info about this specific movie
    }, [item]);


    return (
        <View className="flex-1 bg-neutral-900">
            <SafeAreaView
                className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin}`}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.background}
                                  className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => toggleFavorite(!isFavorite)}
                >
                    <HeartIcon size="35" color={isFavorite ? "red" : "white"}/>
                </TouchableOpacity>
            </SafeAreaView>
            <ScrollView
                contentContainerStyle={{paddingBottom: 20}}
                className="w-full"
            >
                <View>
                    <Image
                        source={require('../../../assets/images/moviePoster2.png')}
                        style={{width: width, height: height * 0.55}}
                    />
                    <LinearGradient
                        colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                        style={{width: width, height: height * 0.40}}
                        start={{x: 0.5, y: 0}}
                        end={{x: 0.5, y: 1}}
                        className="absolute bottom-0"
                    />
                </View>

                {/*All the movie details*/}
                <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
                    {/*title*/}
                    <Text className="text-white text-center text-3xl font-bold tracking-wider">
                        Ant-Man and the Wasp: Quantumania
                    </Text>
                    <Text className="text-neutral-400 font-semibold text-base text-center">
                        Released . 2020 . 170 min
                    </Text>
                    <View className="flex-row justify-center mx-4 space-x-2">
                        <Text className="text-neutral-400 font-semibold text-base text-center">
                            Action . Thrill . Comedy
                        </Text>
                    </View>
                    <Text></Text>
                </View>
            </ScrollView>
        </View>
    )
}

