import {View, Text, FlatList, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {themeColors} from "../apps/coffee-app/CoffeeTheme";


/**
 *
 * @param data is what you are going to show in this chips view. it's just a JS object and "id" field of that object
 *
 */
export const HorizontalChipsView = ({data}) => {

    const [activeCategory, setActiveCategory] = useState(1);

    return (
        <View className="px-5 mt-6">
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id}
                className="overflow-visible"
                renderItem={({item}) => {
                    let isActive = item.id === activeCategory;
                    let activeTextClass = isActive ? 'text-white' : 'text-gray-700';
                    return (
                        <TouchableOpacity
                            onPress={() => setActiveCategory(item.id)}
                            style={{backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)'}}
                            className="p-4 px-5 mr-2 rounded-full shadow">
                            <Text className={"font-semibold " + activeTextClass}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}
