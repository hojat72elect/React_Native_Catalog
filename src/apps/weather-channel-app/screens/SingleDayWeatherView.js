import {Image, Text, View} from "react-native";
import {weatherImages} from "../constants";

/**
 *
 * View for showing weather info for today.
 *
 * @param location
 * @param current
 * @param weather
 * @returns {JSX.Element}
 */
export function SingleDayWeatherView({location, current, weather}) {

    return (<View
        style={{
            marginHorizontal: 12,
            justifyContent: 'space-around',
            marginBottom: 20,
            flex: 1
        }}
    >

        {/*location (city and country)*/}
        <Text
            style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 25,
                fontWeight: 'bold'
            }}
        >
            {location?.name},{'\u0020'}
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: 'rgb(209 213 219)'
                }}
            >
                {location?.country}
            </Text>
        </Text>

        {/*Weather image*/}
        <Image
            source={weatherImages[current?.condition?.text]}
            style={{
                alignSelf: 'center',
                width: 210,
                height: 210,
            }}
        />

        <View
            style={{
                alignItems: 'center'
            }}>
            {/*Temperature in celsius.*/}
            <Text
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 40,
                }}
            >{current?.temp_c}&#176;</Text>
            {/*Today's weather condition.*/}
            <Text
                style={{
                    color: 'white',
                    fontSize: 20,
                }}
            >{current?.condition?.text}</Text>
        </View>

        {/*A row of other stats*/}
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../../../../assets/icons/wind.png')}
                    style={{
                        height: 25,
                        width: 25
                    }}

                />
                <Text
                    style={{
                        fontSize: 16,
                        marginLeft: 8,
                        color: 'white',
                        fontWeight: '600'
                    }}
                >{current?.wind_kph} km/h</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../../../../assets/icons/drop.png')}
                    style={{
                        height: 25,
                        width: 25
                    }}
                />
                <Text
                    style={{
                        fontSize: 16,
                        marginLeft: 8,
                        color: 'white',
                        fontWeight: '600'
                    }}
                >{current?.humidity}%</Text>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../../../../assets/icons/sun.png')}
                    style={{
                        height: 25,
                        width: 25
                    }}
                />
                <Text style={{
                    fontSize: 16,
                    marginLeft: 8,
                    color: 'white',
                    fontWeight: '600'
                }}>{weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
            </View>
        </View>
    </View>);
}