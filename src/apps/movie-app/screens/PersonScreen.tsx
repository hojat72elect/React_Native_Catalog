import React, {useEffect, useState} from 'react'
import {Dimensions, Image, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {ChevronLeftIcon} from "react-native-heroicons/outline";
import {HeartIcon} from "react-native-heroicons/solid";
import {styles} from "../../../common/Theme";
import {MovieList} from "../components/MovieList";
import {useNavigation, useRoute} from "@react-navigation/native";
import {fallbackPersonImage, fetchPersonDetails, fetchPersonMovies, image342} from "../api/MovieDb";
import {Loading} from "../components/Loading";
import {ApiPersonDetails, ApiPersonMovies, ApiResponseResults} from "../api/response/ApiResponse";

const ios = Platform.OS === 'ios';
const verticalMargin: string = ios ? '' : ' my-7';
const {width, height} = Dimensions.get('window');

export function PersonScreen() {
    const {params: item} = useRoute();
    const navigation = useNavigation();

    const [isFavourite, toggleFavourite] = useState(false);
    const [person, setPerson] = useState<ApiPersonDetails | null>(null);
    const [personMovies, setPersonMovies] = useState<ApiResponseResults[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        // @ts-ignore
        const personId = item.id
        setLoading(true);
        getPersonDetails(personId);
        getPersonMovies(personId);
    }, [item]);

    const getPersonDetails = async (id: number) => {
        const data: ApiPersonDetails = await fetchPersonDetails(id);
        console.log('got person details', data);
        setLoading(false);
        if (data) {
            setPerson(data);
        }
    }
    const getPersonMovies = async (id: number) => {
        const data: ApiPersonMovies = await fetchPersonMovies(id);
        console.log('got person movies', data)
        if (data && data.cast) {
            setPersonMovies(data.cast);
        }

    }

    return (
        <ScrollView
            className="flex-1 bg-neutral-900"
            contentContainerStyle={{paddingBottom: 20}}>
            <SafeAreaView
                className={"flex-row justify-between items-center mx-4 z-10 " + verticalMargin}>
                {/* back button */}
                <TouchableOpacity style={styles.background} className="rounded-xl p-1"
                                  onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon size={28} strokeWidth={2.5} color="white"/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size={35} color={isFavourite ? 'red' : 'white'}/>
                </TouchableOpacity>
            </SafeAreaView>

            {/* person details */}
            {
                loading ? (
                    <Loading/>
                ) : (
                    <View>
                        <View
                            className="flex-row justify-center"
                            style={{
                                shadowColor: 'gray',
                                shadowRadius: 40,
                                shadowOffset: {width: 0, height: 5},
                                shadowOpacity: 1,
                            }}
                        >
                            <View
                                className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                                <Image
                                    source={{uri: image342(person?.profile_path ?? null) || fallbackPersonImage}}
                                    style={{height: height * 0.43, width: width * 0.74}}
                                />
                            </View>
                        </View>

                        <View className="mt-6">
                            <Text className="text-3xl text-white font-bold text-center">
                                {person?.name}
                            </Text>
                            <Text className="text-neutral-500 text-base text-center">
                                {person?.place_of_birth}
                            </Text>
                        </View>

                        <View
                            className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold ">Gender</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {
                                        person?.gender === 1 ? 'Female' : 'Male'
                                    }
                                </Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">Birthday</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {person?.birthday}
                                </Text>
                            </View>
                            <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                                <Text className="text-white font-semibold">known for</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {person?.known_for_department}
                                </Text>
                            </View>
                            <View className="px-2 items-center">
                                <Text className="text-white font-semibold">Popularity</Text>
                                <Text className="text-neutral-300 text-sm">
                                    {person?.popularity?.toFixed(2)} %
                                </Text>
                            </View>

                        </View>
                        <View className="my-6 mx-4 space-y-2">
                            <Text className="text-white text-lg">Biography</Text>
                            <Text className="text-neutral-400 tracking-wide">
                                {
                                    person?.biography ? person.biography : 'N/A'
                                }
                            </Text>
                        </View>

                        {person?.id && personMovies.length > 0 &&
                            <MovieList title="Movies" hideSeeAll={true} data={personMovies}/>}

                    </View>
                )
            }


        </ScrollView>

    )
}