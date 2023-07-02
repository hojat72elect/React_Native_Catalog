import {apiKey} from "../constants";
import axios from "axios";

const forecastEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;
const searchEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (e) {
        console.error(`error: ${e}`);
        return null;
    }
}

export const fetchWeatherForecast = (params) => {
    let forecastUrl = forecastEndpoint(params);
    return apiCall(forecastUrl);
}

export const fetchSearchLocations = (params) => {
    let searchUrl = searchEndpoint(params);
    return apiCall(searchUrl);
}