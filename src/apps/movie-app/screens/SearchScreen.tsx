import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    Text,
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useCallback, useState} from "react";
import {fallbackMoviePoster, image185, searchMovies} from "../api/MovieDb";
import {debounce} from 'lodash';
import {XMarkIcon} from "react-native-heroicons/mini";
import {Loading} from "../components/Loading";
import {ApiResponse, ApiResponseResults} from "../api/response/ApiResponse";

const {width, height} = Dimensions.get('window');

export default function SearchScreen() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<ApiResponseResults[]>([])

    const handleSearch = (search: string) => {
        if (search && search.length > 2) {
            setLoading(true);
            searchMovies({
                query: search,
                include_adult: false,
                language: 'en-US',
                page: '1'
            }).then((data: ApiResponse) => {
                setLoading(false);
                if (data && data.results) setResults(data.results);
            })
        } else {
            setLoading(false);
            setResults([])
        }
    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

    return (
        <SafeAreaView
            style={{
                backgroundColor: 'dimgray',
                flex: 1
            }}
        >

            {/* search input */}
            <View
                style={{
                    marginHorizontal: 18,
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: 'oldlace',
                    borderRadius: 100,
                }}
            >
                <TextInput
                    onChangeText={handleTextDebounce}
                    placeholder="Search Movies"
                    placeholderTextColor={'lightgray'}
                    style={{
                        paddingLeft: 19,
                        fontSize: 18,
                        flex: 1,
                        color: 'white',
                        letterSpacing: 1,
                    }}
                />
                <TouchableOpacity
                    // @ts-ignore
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        borderRadius: 100,
                        padding: 12,
                        margin: 4,
                        backgroundColor: 'rgb(115 115 115)',
                    }}
                >
                    <XMarkIcon size={25} color="white"/>
                </TouchableOpacity>
            </View>

            {/* search results */}
            {
                loading ? (
                        <Loading/>
                    ) :
                    results.length > 0 ? (
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal: 15}}
                            className="space-y-3"
                        >
                            <Text className="text-white font-semibold ml-1">Results ({results.length})</Text>
                            <View className="flex-row justify-between flex-wrap">
                                {
                                    results.map((item, index) => {
                                        return (
                                            <TouchableWithoutFeedback
                                                key={index}
                                                // @ts-ignore
                                                onPress={() => navigation.push('Movie', item)}>
                                                <View className="space-y-2 mb-4">
                                                    <Image
                                                        source={{uri: image185(item.poster_path) || fallbackMoviePoster}}
                                                        className="rounded-3xl"
                                                        style={{width: width * 0.44, height: height * 0.3}}
                                                    />
                                                    <Text className="text-gray-300 ml-1">
                                                        {
                                                            item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title
                                                        }
                                                    </Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        )
                                    })
                                }
                            </View>

                        </ScrollView>
                    ) : (

                        <Image
                            source={require('../../../../assets/images/movieTime.png')}
                            style={{
                                height: 400,
                                width: 400,
                                alignItems:'center',
                            }}
                        />

                    )
            }
        </SafeAreaView>
    )
}