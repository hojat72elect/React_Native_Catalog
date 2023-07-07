import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Theme} from "../theme";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {MapPinIcon} from "react-native-heroicons/solid";
import {useState} from "react";

/**
 *
 * @param placeHolder : string the place holder for search bar.
 * @param onTextChanged : DebouncedFunc The debounced function to be called when text inside input changes.
 * @param locations
 * @param handleLocation
 *
 * @return {JSX.Element}
 */
export function SearchBar({placeHolder, onTextChanged, locations, handleLocation}) {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <View style={{
            height: '7%',
            marginHorizontal: 16,
        }}>
            <View
                style={{
                    backgroundColor: showSearch ? Theme.bgWhite(0.2) : 'transparent',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 80,
                    marginTop: 8
                }}
            >

                {
                    showSearch ? (
                        <TextInput
                            style={{
                                paddingLeft: 10,
                                height: 30,
                                flex: 1,
                                fontSize: 19,
                                color: 'white',
                                paddingBottom: 5,
                            }}
                            placeholder={placeHolder}
                            onChangeText={onTextChanged}
                            placeholderTextColor={'lightgray'}/>
                    ) : null
                }
                <TouchableOpacity
                    onPress={() => {
                        setShowSearch(!showSearch);
                    }}
                    style={{
                        backgroundColor: Theme.bgWhite(0.3),
                        borderRadius: 100,
                        padding: 6,
                        margin: 2,
                        height: 'auto'
                    }}
                >
                    <MagnifyingGlassIcon size="25" color="white"/>
                </TouchableOpacity>
            </View>
            {
                locations.length > 0 && showSearch ? (
                    <View
                        style={{
                            position: 'absolute',
                            width: '100%',
                            backgroundColor: 'rgb(209 213 219)',
                            marginTop: 30,
                            borderRadius: 20,
                        }}
                    >
                        {
                            locations.map((location, index) => {
                                let showBorder = index + 1 !== locations.length;
                                let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : '';

                                return (
                                    <TouchableOpacity
                                        key={index}
                                        className={"flex-row items-center border-0 p-3 px-4 m-1 " + borderClass}
                                        onPress={() => {
                                            setShowSearch(false);
                                            handleLocation(location)
                                        }}
                                    >
                                        <MapPinIcon size="20" color="gray"/>
                                        <Text
                                            className="text-black text-lg ml-2"
                                        >{location?.name}, {location?.country}</Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                ) : null
            }
        </View>

    );
}