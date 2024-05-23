import { useActionData } from "react-router-dom";
import { device_type } from "../../../store/models/dbModels/models";
import { PlaceSwitch } from "../PC/placeSwitchTypes";

interface Props {
    type : device_type,
}

export const AllPlacesSwitcher: React.FC<Props> = (props) => {

    const {} = useActionData()
    
    const helperSwither = (type : device_type) => {
        if(type === "PC") {
            return (
                <div>
                    <PlaceSwitch/>
                </div>
            )
        }
        else if(type === "PS") {
            return (
                <div>
                    PS
                </div>
            )
        }
    
        else if(type === "VR") {
            return (
                <div>
                    VR
                </div>
            )
        }
    }

    return (
        <div>
            {helperSwither(props.type)}
        </div>
    )
};