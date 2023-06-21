import {
    Dimensions,
    FlatList,
    Image, ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {themeColors} from "../../common/CoffeeTheme";
import {categories, coffeeItems} from "./Constants";
import {CoffeeCard} from "./CoffeeCard";

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {
    const [activeCategory, setActiveCategory] = useState(1);

    return (
        <View className="flex-1 relative bg-white">
            <StatusBar/>

            <Image
                source={require('../../../assets/images/beansBackground1.png')}
                style={{height: height * 0.2}}
                className="w-full absolute -top-5 opacity-10"/>

            {/* avatar, address, and bell icon */}
            <View className="my-8 mx-4 flex-row justify-between items-center">
                <Image source={require('../../../assets/images/avatar.png')}
                       className="h-9 w-9 rounded-full"/>

                <View className="flex-row items-center space-x-2">
                    <MapPinIcon size="25" color={themeColors.bgLight}/>
                    <Text className="font-semibold text-base">
                        New York, NYC
                    </Text>
                </View>
                <BellIcon size="27" color="black"/>
            </View>

            <ScrollView className="mb-16">
            {/* search bar */}
            <View className="mx-5 shadow" style={{marginTop: height * 0.06}}>
                <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
                    <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700"/>
                    <TouchableOpacity
                        className="rounded-full p-2"
                        style={{backgroundColor: themeColors.bgLight}}>
                        <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                </View>
            </View>
            {/* A chips view, showing categories of coffee served*/}
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
                                style={{backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                                className="p-4 px-5 mr-2 rounded-full shadow">
                                <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>

            {/* A horizontal carousel showing coffee cards */}
            <View className={`overflow-visible flex justify-center flex-1 mt-4`}>
                <Carousel
                    containerCustomStyle={{overflow: 'visible'}}
                    data={coffeeItems}
                    renderItem={({item}) => <CoffeeCard item={item}/>}
                    firstItem={1}
                    inactiveSlideScale={0.75}
                    inactiveSlideOpacity={0.75}
                    sliderWidth={width}
                    itemWidth={width * 0.63}
                    slideStyle={{display: 'flex', alignItems: 'center'}}
                />
            </View>

            </ScrollView>
        </View>
    )
}
