import {TouchableOpacity} from "react-native";
import {HeartIcon} from "react-native-heroicons/solid";
import {useState} from "react";

/**
 *
 * Any kind of button that can have 2 different states. Good examples include
 * like button and thumbs up button.
 *
 * @param isToggled {boolean} use it to determine if the button is toggled by default or not.
 */
export const ToggleButton = ({isToggled}) => {

    // If toggled, true. Otherwise, false.
    const [buttonState, setButtonState] = useState(isToggled);

    return (
        <TouchableOpacity
            onPress={() => setButtonState(!buttonState)}
        >
            <HeartIcon size="35" color={buttonState ? "red" : "white"}/>
        </TouchableOpacity>
    )
}

