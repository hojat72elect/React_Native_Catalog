import React, {useState} from 'react'
import {Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {styles} from "../../../common/Theme";
import {MovieList} from "../components/MovieList";
import {ToggleButton} from "../../../common/ToggleButton";
import {useNavigation} from "@react-navigation/native";

let {width, height} = Dimensions.get('window');
const isIos = Platform.OS === 'ios';
const verticalMargin = isIos ? '' : ' my-10';

export const PersonScreen = () => {

    const [personMovies] = useState([3, 4, 8, 7, 5, 6, 3, 4, 5]);
    const navigation = useNavigation();

    return (
        <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom: 20}}>

            <SafeAreaView
                className={`z-20 w-full flex-row justify-between items-center px-4 ${verticalMargin}`}>
                <TouchableOpacity onPress={() => {
                    console.log("user clicked on the back button");
                    navigation.goBack();
                }}
                                  style={styles.background}
                                  className="rounded-xl p-1">
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                </TouchableOpacity>

                <ToggleButton isToggled={false} Icon={HeartIcon}/>
            </SafeAreaView>

            {/*Personal details*/}
            <View>

                <View
                    className="flex-row justify-center"
                    style={{
                        shadowColor: 'gray',
                        shadowRadius: 40,
                        shadowOffset: {width: 0, height: 5},
                        shadowOpacity: 1,
                    }}
                >
                    <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-500">
                        <Image
                            source={require('../../../../assets/images/castImage2.png')}
                            style={{height: height * 0.43, width: width * 0.74}}
                        />
                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-3xl text-white font-bold text-center">some actor</Text>
                    <Text className="text-base text-neutral-500 text-center">
                        Toronto, Canada
                    </Text>
                </View>
                <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Gender</Text>
                        <Text className="text-neutral-300 text-sm">Male</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Birthday</Text>
                        <Text className="text-neutral-300 text-sm">1993-07-02</Text>
                    </View>
                    <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                        <Text className="text-white font-semibold">Known for</Text>
                        <Text className="text-neutral-300 text-sm">Acting</Text>
                    </View>
                    <View className="px-2 items-center">
                        <Text className="text-white font-semibold">Popularity</Text>
                        <Text className="text-neutral-300 text-sm">64.23</Text>
                    </View>
                </View>
                <View className="my-6 mx-4 space-y-2">
                    <Text className="text-white text-lg">Biography</Text>
                    <Text className="text-neutral-400 tracking-wide">Hojat Ghasemi is an amazing person and one of the
                        best programmers in the world of JavaScript. He loves game programming and is currently living
                        in Canada.</Text>
                </View>

                {/*movies of this person*/}
                <MovieList title="Movies" hideSeeAll={true} data={personMovies}/>
            </View>
        </ScrollView>
    )
}

