export const apiKey = 'b16211c089da4ad8897224431230306';

type WeatherImagesType = {
    "Partly cloudy": any,
    "Moderate rain": any,
    "Patchy rain possible": any,
    'Sunny': any,
    'Clear': any,
    'Overcast': any,
    'Cloudy': any,
    "Light rain": any,
    "Moderate rain at times": any,
    "Heavy rain": any,
    "Heavy rain at times": any,
    "Moderate or heavy freezing rain": any,
    "Moderate or heavy rain shower": any,
    "Moderate or heavy rain with thunder": any,
    'Mist': any,
    'other': any,
}

export const weatherImages: WeatherImagesType = {
    'Partly cloudy': require('../../../../assets/images/partlycloudy.png'),
    'Moderate rain': require('../../../../assets/images/moderaterain.png'),
    'Patchy rain possible': require('../../../../assets/images/moderaterain.png'),
    'Sunny': require('../../../../assets/images/sun.png'),
    'Clear': require('../../../../assets/images/sun.png'),
    'Overcast': require('../../../../assets/images/cloud.png'),
    'Cloudy': require('../../../../assets/images/cloud.png'),
    'Light rain': require('../../../../assets/images/moderaterain.png'),
    'Moderate rain at times': require('../../../../assets/images/moderaterain.png'),
    'Heavy rain': require('../../../../assets/images/heavyrain.png'),
    'Heavy rain at times': require('../../../../assets/images/heavyrain.png'),
    'Moderate or heavy freezing rain': require('../../../../assets/images/heavyrain.png'),
    'Moderate or heavy rain shower': require('../../../../assets/images/heavyrain.png'),
    'Moderate or heavy rain with thunder': require('../../../../assets/images/heavyrain.png'),
    'Mist': require('../../../../assets/images/mist.png'),
    'other': require('../../../../assets/images/moderaterain.png')
}