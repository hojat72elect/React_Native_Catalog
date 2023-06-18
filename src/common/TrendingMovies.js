import React from 'react'
import {Dimensions, Image, Text, TouchableWithoutFeedback, View} from "react-native";
import Carousel from "react-native-snap-carousel";
import {useNavigation} from "@react-navigation/native";

let {width, height} = Dimensions.get('window');

const MovieCard = ({item, handleClick}) => {
    return (
        <TouchableWithoutFeedback onPress={() => handleClick(item)}>
            <Image
                source={require('../../assets/images/moviePoster1.png')}
                style={{
                    width: width * 0.6,
                    height: height * 0.4,
                    resizeMode: 'contain',
                    borderRadius: 24
                }}
            />
        </TouchableWithoutFeedback>
    );
}

export const TrendingMovies = ({data}) => {
    const navigation = useNavigation();
    const handleClick = (item) => {
        console.log(`user clicked on item ${item} in carousel`);
        navigation.navigate('Movie', item);
    };


    return (
        <View className="mb-8">
            <Text className="text-white text-xl mx-4 mb-5">Trending</Text>
            <Carousel
                data={data}
                renderItem={({item}) => <MovieCard item={item} handleClick={() => {
                    handleClick(item)
                }}/>}
                firstItem={1}
                inactiveSlideOpacity={0.60}
                sliderWidth={width}
                itemWidth={width * 0.62}
                slideStyle={{display: 'flex', alignItems: 'center'}}

            />
        </View>
    )
}
