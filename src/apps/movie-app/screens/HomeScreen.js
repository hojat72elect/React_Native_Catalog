import React, {useEffect, useState} from 'react'
import {Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Bars3CenterLeftIcon, MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {TrendingMovies} from "../components/TrendingMovies";
import {MovieList} from "../components/MovieList";
import {styles} from "../../../common/Theme";
import {useNavigation} from "@react-navigation/native";
import {fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies} from "../api/MovieDb";
import {Loading} from "../components/Loading";

const isIos = Platform.OS === 'ios';

export const HomeScreen = () => {

    const [trending, setTrending] = useState([]);
    const [upcoming, setUpcoming] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        getTrendingMovies();
        getUpcomingMovies();
        getTopRatedMovies();
    }, []);

    const getTrendingMovies = async () => {
        const data = await fetchTrendingMovies();
        console.log('got trending', data.results.length)
        if (data && data.results) setTrending(data.results);
        setLoading(false)
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        console.log('got upcoming', data.results.length)
        if (data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        console.log('got top rated', data.results.length)
        if (data && data.results) setTopRated(data.results);
    }

    return (
        <View className="flex-1 bg-gray-600">
            {/*Search bar and logo*/}
            <SafeAreaView className={isIos ? "-mb-2" : "mb-3"}>
                <StatusBar style="light"/>
                <View className="flex-row justify-between items-center mx-4 my-10">
                    <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white"/>
                    <Text className="text-white text-3xl font-bold">
                        <Text style={styles.text}>M</Text>ovies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size={30} strokeWidth={2} color="white"/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {/*List of movies*/}
            {loading ? (
                <Loading/>
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 10}}
                >
                    {/*Trending movies carousel.*/}
                    {trending.length > 0 && <TrendingMovies data={trending}/>}

                    {/*A row of upcoming movies.*/}
                    {upcoming.length > 0 && <MovieList title="upcoming" data={upcoming}/>}

                    {/*A row of top-rated movies.*/}
                    {topRated.length > 0 && <MovieList title="Top Rated" data={topRated}/>}
                </ScrollView>)}
        </View>
    )
}
