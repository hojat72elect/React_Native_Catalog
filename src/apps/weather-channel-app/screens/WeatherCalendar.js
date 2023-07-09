import {Image, ScrollView, Text, View} from "react-native";
import {CalendarDaysIcon} from "react-native-heroicons/solid";
import {Theme} from "../theme";
import {weatherImages} from "../constants";

/**
 * You give it the data of the next few days, and it shows it into a horizontal
 * scroll view, just like a calendar.
 *
 *
 * @param forecastData {ApiForecastResultForecastForecastday[]}
 *
 * @returns {JSX.Element}
 */
export function WeatherCalendar({forecastData}) {
    return (
        <View
        style={{marginTop:20}}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 18,
                }}
            >
                <CalendarDaysIcon size="22" color="white"/>
                <Text
                    style={{
                        color: 'white',
                        marginLeft: 10,
                        fontSize: 18,
                    }}
                >Daily forecast</Text>
            </View>
            <ScrollView
                horizontal
                contentContainerStyle={{paddingHorizontal: 15, marginTop: 15}}
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
                                  style={{
                                      backgroundColor: Theme.bgWhite(0.15),
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      width: 100,
                                      borderRadius: 20,
                                      paddingVertical: 10,
                                      marginHorizontal: 7
                                  }}
                            >
                                <Image
                                    source={weatherImages[item?.day?.condition?.text]}
                                    style={{
                                        width: 55,
                                        height: 55,
                                    }}
                                />
                                <Text style={{color: 'white'}}>{dayName}</Text>
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                        fontWeight: '600',
                                    }}
                                >{item?.day?.avgtemp_c}&#176;</Text>
                            </View>
                        );
                    })
                }


            </ScrollView>
        </View>
    );
}