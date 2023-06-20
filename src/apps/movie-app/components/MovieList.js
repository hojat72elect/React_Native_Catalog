import React from 'react'
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "../../../common/Theme";


let {width, height} = Dimensions.get('window');

export const MovieList = ({title, data, hideSeeAll}) => {

    const movieName = "the name of the movie ";

    return (
        <View className="mb-8 space-y-4">
            <View className="mx-4 flex-row justify-between items-center">
                <Text className="text-white text-xl">{title}</Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styles.text} className="text-lg">See All</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            {/*A scrollable row of movies.*/}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
            >
                {
                    data.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => {
                                    console.log(`user clicked on a movie : ${item}`);
                                }}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image
                                        source={require('../../../../assets/images/moviePoster2.png')}
                                        style={{
                                            width: width * 0.33,
                                            height: height * 0.22,
                                            resizeMode: 'cover',
                                            borderRadius: 24
                                        }}
                                    />
                                    <Text
                                        className="text-neutral-300 ml-5">{movieName.length > 14 ? movieName.slice(0, 14) + '...' : movieName}</Text>
                                </View>

                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>

    )
}

