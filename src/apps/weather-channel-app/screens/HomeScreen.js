import {Image, SafeAreaView, StatusBar, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
import {debounce} from "lodash";
import {fetchSearchLocations, fetchWeatherForecast} from "../api/Weather";
import {CircleSnail} from "react-native-progress";
import {getData, storeData} from "../data/AsyncStorage";
import {WeatherCalendar} from "./WeatherCalendar";
import {SingleDayWeatherView} from "./SingleDayWeatherView";
import {SearchBar} from "./SearchBar";

export default function HomeScreen() {

    const [locations, setLocations] = useState([]);
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);

    function handleSearch(value) {
        // fetch locations if search value is long enough
        if (value.length > 2) {
            fetchSearchLocations({cityName: value}).then(data => {
                setLocations(data);
            });
        }
    }

    const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

    function handleLocation(location) {

        setLocations([]);
        setLoading(true);
        fetchWeatherForecast({
            cityName: location.name,
            days: '7'
        }).then(data => {
            setWeather(data);
            setLoading(false);
            storeData('city', location.name)
        });
    }

    const {current, location} = weather;

    async function fetchWeatherData() {
        const chosenCity = await getData('city');
        let cityName = 'Toronto';
        if (chosenCity) cityName = chosenCity;

        fetchWeatherForecast({
            cityName: cityName,
            days: '7',
        }).then(data => {
            setWeather(data);
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchWeatherData();
    }, []);

    return (
        <View className="flex-1 relative">
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
            <Image source={require('../../../../assets/images/bg.png')}
                   className="absolute h-full w-full"
                   blurRadius={70}
            />
            {
                loading ? (
                    <View
                        className="flex-1 flex-row justify-center items-center"
                    >

                        <CircleSnail thickness={10} size={140} color="#0bb3b2"/>
                    </View>
                ) : (
                    <SafeAreaView className="flex flex-1">
                        {/*Search Section*/}

                        <SearchBar placeHolder="Search city" onTextChanged={handleTextDebounce} locations={locations}
                                   handleLocation={handleLocation}/>

                        {/*Weather information for today*/}
                        <SingleDayWeatherView location={location} current={current} weather={weather}/>

                        {/*The weather calendar for next few days at the bottom of the page*/}
                        <WeatherCalendar forecastData={weather?.forecast?.forecastday}/>
                    </SafeAreaView>
                )
            }


        </View>
    );
}
