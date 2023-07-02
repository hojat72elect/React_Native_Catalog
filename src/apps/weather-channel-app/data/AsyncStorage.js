import { AsyncStorage } from 'react-native'; // only import it like this

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.error("Error storing value", error);
    }
};

export const getData = async (key) => {
    try {
        return await AsyncStorage.getItem(key);
    } catch (error) {
        console.error('Error retrieving value: ', error);
    }
};