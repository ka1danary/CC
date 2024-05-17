import { device_type } from "../../../store/models/dbModels/models";

interface Props {
    type : device_type
}

export const AllPlacesSwitcher: React.FC<Props> = (props) => {
    
    const helperSwither = (type : device_type) => {
        if(type === "PC") {
            return (
                <div>
                    PC
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