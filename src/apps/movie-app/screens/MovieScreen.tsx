import React, {useEffect, useState} from 'react'
import {Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {LinearGradient} from "expo-linear-gradient";
import {HeartIcon} from "react-native-heroicons/solid";
import {MovieList} from "../components/MovieList";
import {Cast} from "../components/Cast";
import {styles} from "../../../common/Theme";
import {fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500} from "../api/MovieDb";
import {Loading} from "../components/Loading";
import {theme} from "../MovieAppTheme";
import {
    ApiMovieCredits,
    ApiMovieCreditsCast,
    ApiMovieDetails,
    ApiResponse,
    ApiResponseResults
} from "../api/response/ApiResponse";

const {width, height} = Dimensions.get('window');
const isIos = Platform.OS === 'ios';
const topMargin: string = isIos ? '' : ' mt-7';

export const MovieScreen = () => {

    const {params: item} = useRoute();
    const navigation = useNavigation();

    const [movie, setMovie] = useState<ApiMovieDetails | null>(null);
    const [cast, setCast] = useState<ApiMovieCreditsCast[]>([]);
    const [similarMovies, setSimilarMovies] = useState<ApiResponseResults[]>([]);
    const [isFavourite, toggleFavourite] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // @ts-ignore
        const movieId = item.id
        setLoading(true);
        getMovieDetails(movieId);
        getMovieCredits(movieId);
        getSimilarMovies(movieId);
    }, [item]);

    const getMovieDetails = async (id: number) => {
        const data: ApiMovieDetails = await fetchMovieDetails(id);
        console.log('got movie details', data);
        setLoading(false);
        if (data) {
            setMovie(data);
        }
    }
    const getMovieCredits = async (id: number) => {
        const data: ApiMovieCredits = await fetchMovieCredits(id);
        console.log('got movie credits', data);
        if (data && data.cast) {
            setCast(data.cast);
        }
    }
    const getSimilarMovies = async (id: number) => {
        const data: ApiResponse = await fetchSimilarMovies(id);
        console.log('got similar movies');
        if (data && data.results) {
            setSimilarMovies(data.results);
        }

    }

    return (
        <ScrollView
            contentContainerStyle={{paddingBottom: 20}}
            className="flex-1 bg-neutral-900">

            {/* back button and movie poster */}
            <View className="w-full">
                <SafeAreaView
                    className={"absolute z-20 w-full flex-row justify-between items-center px-4 " + topMargin}>
                    <TouchableOpacity style={styles.background} className="rounded-xl p-1"
                                      onPress={() => navigation.goBack()}>
                        <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                        <HeartIcon size={35} color={isFavourite ? theme.background : 'white'}/>
                    </TouchableOpacity>
                </SafeAreaView>
                {
                    loading ? (
                        <Loading/>
                    ) : (
                        <View>
                            <Image
                                source={{uri: image500(movie?.poster_path) || fallbackMoviePoster}}
                                style={{width, height: height * 0.55}}
                            />
                            <LinearGradient
                                colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                                style={{width, height: height * 0.40}}
                                start={{x: 0.5, y: 0}}
                                end={{x: 0.5, y: 1}}
                                className="absolute bottom-0"
                            />
                        </View>
                    )
                }


            </View>

            {/* movie details */}

            <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
                {/* title */}
                <Text className="text-white text-center text-3xl font-bold tracking-widest">
                    {
                        movie?.title
                    }
                </Text>

                {/* status, release year, runtime */}
                {
                    movie?.id ? (
                        <Text className="text-neutral-400 font-semibold text-base text-center">
                            {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} • {movie?.runtime} min
                        </Text>
                    ) : null
                }


                {/* genres  */}
                <View className="flex-row justify-center mx-4 space-x-2">
                    {
                        movie?.genres?.map((genre, index) => {
                            let showDot = index + 1 !== movie.genres.length;
                            return (
                                <Text key={index} className="text-neutral-400 font-semibold text-base text-center">
                                    {genre?.name} {showDot ? "•" : null}
                                </Text>
                            )
                        })
                    }
                </View>

                {/* description */}
                <Text className="text-neutral-400 mx-4 tracking-wide">
                    {
                        movie?.overview
                    }
                </Text>

            </View>


            {/* cast */}
            {
                movie?.id && cast.length > 0 && <Cast navigation={navigation} cast={cast}/>
            }

            {/* similar movies section */}
            {
                movie?.id && similarMovies.length > 0 &&
                <MovieList title={'Similar Movies'} hideSeeAll={true} data={similarMovies}/>
            }

        </ScrollView>
    )
}

