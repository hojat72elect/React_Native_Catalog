import {Image, Text, View} from "react-native";
import {weatherImages} from "../constants";

/**
 *
 * The View for showing weather information for a single day.
 *
 * @param location
 * @param current
 * @param weather
 * @returns {JSX.Element}
 */
export function SingleDayWeatherView({location, current, weather}) {

    return (<View className="mx-4 flex justify-around flex-1 mb-2">
        {/*location*/}
        <Text className="text-white text-center text-2xl font-bold">
            {location?.name},{'\u0020'}
            <Text className="text-lg font-semibold text-gray-300">
                {location?.country}
            </Text>
        </Text>
        {/*Weather image*/}
        <Image
            source={weatherImages[current?.condition?.text]}
            className="w-52 h-52 justify-center flex-row mx-auto"
        />
        {/*Degree celsius*/}
        <View className="space-y-2">
            <Text
                className="text-center font-bold text-white text-6xl ml-5">{current?.temp_c}&#176;</Text>
            <Text
                className="text-center text-white text-xl tracking-widest">{current?.condition?.text}</Text>
        </View>
        {/*Other stats*/}
        <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
                <Image
                    source={require('../../../../assets/icons/wind.png')}
                    className="h-6 w-6"
                />
                <Text className="text-white font-semibold text-base">{current?.wind_kph} km/h</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image
                    source={require('../../../../assets/icons/drop.png')}
                    className="h-6 w-6"
                />
                <Text className="text-white font-semibold text-base">{current?.humidity}%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image
                    source={require('../../../../assets/icons/sun.png')}
                    className="h-6 w-6"
                />
                <Text
                    className="text-white font-semibold text-base">{weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
            </View>
        </View>
    </View>);
}