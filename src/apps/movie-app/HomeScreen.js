import React, {useState} from 'react'
import {Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {styles} from "../../common/themes/Theme";
import {TrendingMovies} from "../../common/TrendingMovies";
import {MovieList} from "../../common/MovieList";

const isIos = Platform.OS === 'ios';

export default function HomeScreen() {

    const [trending, setTrending] = useState([2, 3, 4]);
    const [upcoming, setUpcoming] = useState([3, 4, 7, 6, 5, 3, 4, 5]);
    const [topRated, setTopRated] = useState([2, 6, 8, 3, 7, 4, 5, 2]);


    return (
        <View className="flex-1 bg-neutral-800">
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
            </ScrollView>
        </View>
    )
}
