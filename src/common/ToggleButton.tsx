import {TouchableOpacity} from "react-native";
import React, {useState} from "react";

type ToggleButtonProps = {
    isToggled: boolean;
    onToggled?: () => void;
    buttonSize?: number;
    Icon: React.ElementType;
};


/**
 *
 * Any kind of button that can have 2 different states. Good examples include
 * like button and thumbs up button.
 *
 * isToggled {boolean} use it to determine if the button is toggled by default or not.
 */
export const ToggleButton = ({
                                 isToggled = false,
                                 onToggled = () => {
                                 },
                                 buttonSize = 35,
                                 Icon,
                             }: ToggleButtonProps) => {

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

