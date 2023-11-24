import {Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import {MapPinIcon} from 'react-native-heroicons/solid';
import {mockedCoffeeCategories, mockedCoffeeItems} from "../data/FakeData";
import {CoffeeCard} from "../ui/CoffeeCard";
import {HorizontalChipsView} from "../../../common/HorizontalChipsView";
import {themeColors} from "../theme/CoffeeTheme";

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
                source={require('../../../../assets/images/beansBackground1.png')}
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
                <Image source={require('../../../../assets/images/avatar.png')}
                       style={{
                           height: 35,
                           width: 35,
                           borderRadius: 9999,
                       }}
                />

                {/*The pin icon and the address of the cafe*/}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    <MapPinIcon size="25" color={themeColors.bgLight}/>
                    <Text style={{fontWeight: '600', fontSize: 16, lineHeight: 24, marginLeft: 4}}>
                        New York, NYC
                    </Text>
                </View>
                <BellIcon size={30} color={themeColors.text}/>
            </View>

            <ScrollView style={{marginBottom: 72}}>
                {/* search bar */}
                <View
                    style={{
                        marginTop: height * 0.01,
                        marginHorizontal: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderRadius: 100,
                        padding: 2,
                        backgroundColor: 'lightgray'
                    }}
                >
                    <TextInput
                        placeholder='Search for your favorite coffee'
                        style={{
                            paddingLeft: 18,
                            flex: 1,
                            fontWeight: '600',
                            color: 'rgb(55 65 81)'
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: themeColors.bgLight,
                            borderRadius: 100,
                            padding: 16,
                            marginRight: 2
                        }}>
                        <MagnifyingGlassIcon size={25} strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                </View>

                {/* A chips view, showing categories of coffee served in this shop.*/}
                <HorizontalChipsView data={mockedCoffeeCategories} activeButtonBackgroundColor={themeColors.bgLight}/>

                {/* A horizontal carousel showing coffee cards */}
                <View
                    style={{
                        overflow: 'visible',
                        justifyContent: 'center',
                        flex: 1,
                        marginTop: 18,
                    }}
                >
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
