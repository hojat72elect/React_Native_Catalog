import React from 'react'
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "../../../common/Theme";
import {useNavigation} from "@react-navigation/native";
import {fallbackMoviePoster, image185} from "../api/MovieDb";
import {ApiResponseResults} from "../api/response/ApiResponse";

const {width, height} = Dimensions.get('window');

type MovieListProps = {
    title: string;
    data: ApiResponseResults[];
    hideSeeAll: boolean;
};

export const MovieList = ({title, data, hideSeeAll}: MovieListProps) => {

    const navigation = useNavigation();

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
                                    // @ts-ignore
                                    navigation.push('Movie', item);
                                    console.log(`user clicked on a movie : ${item}`);
                                }}
                            >
                                <View className="space-y-1 mr-4">
                                    <Image
                                        source={{uri: image185(item.poster_path) || fallbackMoviePoster}}
                                        style={{
                                            width: width * 0.33,
                                            height: height * 0.22,
                                            resizeMode: 'cover',
                                            borderRadius: 24
                                        }}
                                    />
                                    <Text className="text-neutral-300 ml-5">
                                        {
                                            item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title
                                        }
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
};
