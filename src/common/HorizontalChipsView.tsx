import {Text, FlatList, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {themeColors} from "../apps/coffee-app/CoffeeTheme";

type FakeDataItem = {
    id: number;
    title: string;
};

type Props = {
    data: FakeDataItem[];
};

/**
 * @param data is what you are going to show in this chips view. it's just a JS object and "id" field of that object.
 */
export const HorizontalChipsView = ({data}: Props) => {

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
                            backgroundColor: isActive ? themeColors.bgLight : 'rgba(0,0,0,0.07)',
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
