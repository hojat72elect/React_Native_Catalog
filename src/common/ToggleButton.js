import {TouchableOpacity} from "react-native";
import {useState} from "react";


/**
 *
 * Any kind of button that can have 2 different states. Good examples include
 * like button and thumbs up button.
 *
 * @param isToggled {boolean} use it to determine if the button is toggled by default or not.
 * @param onToggled {()=>{}}
 * @param buttonSize {number}
 * @param Icon
 */
export const ToggleButton = ({
                                 isToggled = false,
                                 onToggled = () => {
                                 },
                                 buttonSize = 35,
                                 Icon,
                             }) => {

    // If toggled, true. Otherwise, false.
    const [buttonState, setButtonState] = useState(isToggled);

    return (
        <TouchableOpacity
            onPress={() => {
                setButtonState(!buttonState)
                onToggled();
            }}
        >
            <Icon size={buttonSize} color={buttonState ? "red" : "white"}/>
        </TouchableOpacity>
    )
}

