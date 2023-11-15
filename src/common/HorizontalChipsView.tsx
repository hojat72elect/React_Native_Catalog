import {ColorValue, FlatList, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {themeColors} from "../apps/coffee-app/theme/CoffeeTheme";

type FakeDataItem = {
    id: number;
    title: string;
};

type Props = {
    data: FakeDataItem[];
    activeButtonBackgroundColor: ColorValue,
};

/**
 * @param data is what you are going to show in this chips view. it's just a JS object and "id" field of that object.
 * @param activeButtonBackgroundColor the color of the chip when it's in active state.
 */
export const HorizontalChipsView = ({data, activeButtonBackgroundColor}: Props) => {

    const [activeCategory, setActiveCategory] = useState(1);

    return (
        <FlatList
            style={{
                paddingHorizontal: 5,
                marginTop: 18,
                overflow: 'visible'
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => {
                let isActive = item.id === activeCategory;
                let activeTextClass = isActive ? 'white' : themeColors.text;
                return (
                    <TouchableOpacity
                        onPress={() => setActiveCategory(item.id)}
                        style={{
                            backgroundColor: isActive ? activeButtonBackgroundColor : 'rgba(0,0,0,0.07)',
                            paddingVertical: 16,
                            paddingHorizontal: 32,
                            marginRight: 6,
                            borderRadius: 40,
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: '600',
                                color: activeTextClass
                            }}
                        >{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
        />
    )
}
