import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {mockedCoffeeCategories, mockedCoffeeItems} from "./FakeData";
import {CoffeeCard} from "./CoffeeCard";
import {HorizontalChipsView} from "../../common/HorizontalChipsView";
import {themeColors} from "./CoffeeTheme";

const {width, height} = Dimensions.get('window');

export const HomeScreen = () => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            <StatusBar/>

            <Image
                source={require('../../../assets/images/beansBackground1.png')}
                style={{
                    height: height * 0.2,
                    width: '100%',
                    position: 'absolute',
                    top: -5,
                    opacity: 0.1,
                }}
            />

            <View
                style={{
                    marginVertical: 26,
                    marginHorizontal: 12,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                {/*The avatar image*/}
                <Image source={require('../../../assets/images/avatar.png')}
                       style={{
                           height: 35,
                           width: 35,
                           borderRadius: 9999,
                       }}
                />

                <View className="flex-row items-center space-x-2">
                    <MapPinIcon size="25" color={themeColors.bgLight}/>
                    <Text className="font-semibold text-base">
                        New York, NYC
                    </Text>
                </View>
                <BellIcon size={27} color="black"/>
            </View>

            <ScrollView className="mb-16">
                {/* search bar */}
                <View className="mx-5 shadow" style={{marginTop: height * 0.06}}>
                    <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
                        <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700"/>
                        <TouchableOpacity
                            className="rounded-full p-2"
                            style={{backgroundColor: themeColors.bgLight}}>
                            <MagnifyingGlassIcon size={25} strokeWidth={2} color="white"/>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* A chips view, showing categories of coffee served in this shop.*/}
                <HorizontalChipsView data={mockedCoffeeCategories}/>

                {/* A horizontal carousel showing coffee cards */}
                <View className={`overflow-visible flex justify-center flex-1 mt-4`}>
                    <Carousel
                        containerCustomStyle={{overflow: 'visible'}}
                        data={mockedCoffeeItems}
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
