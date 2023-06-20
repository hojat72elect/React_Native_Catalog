import React, {useState} from 'react'
import {Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {TrendingMovies} from "../components/TrendingMovies";
import {MovieList} from "../components/MovieList";
import {styles} from "../../../common/Theme";

const isIos = Platform.OS === 'ios';

export const HomeScreen = () => {

    const [trending] = useState([3, 8, 4, 7, 5, 6, 3, 4, 8, 7, 5]);
    const [upcoming] = useState([3, 4, 7, 6, 5, 3, 4, 5]);
    const [topRated] = useState([2, 6, 8, 3, 7, 4, 5, 2]);


    return (
        <View className="flex-1 bg-white">
            {/*Search bar and logo*/}
            <SafeAreaView className={isIos ? "-mb-2" : "mb-3"}>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4 my-10">
                    <Bars3CenterLeftIcon size="30" strokeWidth="2" color="white"/>
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity>
                        <MagnifyingGlassIcon size="30" strokeWidth="2" color="white"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {/*List of movies*/}
            <ScrollView
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{paddingBottom: 10}}
            >
                {/*movies carousel.*/}
                <TrendingMovies data={trending}/>

                {/*A list of upcoming movies.*/}
                <MovieList title="upcoming" data={upcoming}/>

                {/*A list of top-rated movies.*/}
                <MovieList title="Top Rated" data={topRated}/>
            </ScrollView>
        </View>
    )
}
