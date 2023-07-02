import {Image, ScrollView, Text, View} from "react-native";
import {CalendarDaysIcon} from "react-native-heroicons/solid";
import {Theme} from "../theme";
import {weatherImages} from "../constants";

/**
 * You give it the data of the next few days, and it shows it into a horizontal
 * scroll view, just like a calendar.
 *
 * @returns {JSX.Element}
 */
export function WeatherCalendar({forecastData}){
    return (
        <View className="mb-2 space-y-3">
            <View className="flex-row items-center mx-5 space-x-2">
                <CalendarDaysIcon size="22" color="white"/>
                <Text className="text-white text-base">Daily forecast</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}
            >
                {
                    forecastData?.map((item, index) => {

                        let date = new Date(item.date);
                        let options = {weekday: 'long'};
                        let dayName = date.toLocaleDateString('en-US', options);
                        dayName = dayName.split(',')[0];


                        return (
                            <View key={index}
                                  className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                                  style={{backgroundColor: Theme.bgWhite(0.15)}}
                            >
                                <Image
                                    source={weatherImages[item?.day?.condition?.text]}
                                    className="h-11 w-11"
                                />
                                <Text className="text-white">{dayName}</Text>
                                <Text
                                    className="text-white text-xl font-semibold">{item?.day?.avgtemp_c}&#176;</Text>
                            </View>
                        );
                    })
                }


            </ScrollView>
        </View>
    );
}