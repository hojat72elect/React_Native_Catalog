import {FlatList, Image, SafeAreaView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {StatusBar} from "expo-status-bar";
import {MapPinIcon} from "react-native-heroicons/solid";
import {themeColors} from "../../common/CoffeeTheme";
import {BellIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {categories} from "./Constants";

export const HomeScreen = () => {

    const [activeCategory, setActiveCategory] = useState(1);

    return (
        <View className="flex-1 relative bg-white">
            <StatusBar/>
            <Image
                source={require('../../../assets/images/beansBackground1.png')}
                className="w-full absolute -top-5 opacity-10"
                style={{height: 220}}
            />
            <SafeAreaView className="flex-1 mt-10">

                {/* Avatar and bell icon. */}
                <View className="px-4 flex-row justify-between items-center">
                    <Image
                        source={require('../../../assets/images/avatar.png')}
                        className="h-9 w-9 rounded-full"
                    />
                    <View className="flex-row items-center space-x-2">
                        <MapPinIcon size="25" color={themeColors.bgLight}/>
                        <Text className="text-base font-semibold">Toronto, Canada</Text>
                    </View>
                    <BellIcon size="27" color="black"/>
                </View>
                {/*search bar*/}
                <View className="mx-5 mt-14">
                    <View className="flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]">
                        <TextInput placeholder="Search" className="p-4 flex-1 font-semibold text-gray-700"/>
                        <TouchableOpacity
                            className="rounded-full p-2"
                            style={{backgroundColor: themeColors.bgLight}}
                        >
                            <MagnifyingGlassIcon size={25} strokeWidth={2} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/*Categories*/}
                <View className="px-5 mt-6">
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        keyExtractor={item => item.id}
                        className="overflow-visible"
                        renderItem={({item}) => {
                            let isActive = item.id === activeCategory;
                            let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
                            return (
                                <TouchableOpacity
                                    onPress={() => setActiveCategory(item.id)}
                                    style={{backgroundColor: isActive ? themeColors.bgLight : 'rgba(0, 0, 0, 0.07)'}}
                                    className="py-4 px-5 rounded-full mr-2 shadow"
                                >
                                    <Text className={`font-semibold ${activeTextClass}`}>
                                        {item.title}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                {/*Coffee cards*/}

            </SafeAreaView>
        </View>
    )
}


