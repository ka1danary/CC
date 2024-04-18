import { IRequest } from "../../store/models/IRequest";

interface Props {
    request : IRequest;
}

export const CreateRequestCard: React.FC<Props> = ({request}) => {
    return (
        <div>
            <div>
                <div>
                    <div>Дата</div>
                    <div>{request.date?.getDay()}</div>
                </div>
                <div>
                    <div>Тип</div>
                    <div>{request.deviceType}</div>
                </div>
                <div>
                    <div>Длительность</div>
                    <div>{request.packageType}</div>
                </div>
                <div>
                    <div>Место</div>
                    <div>{request.place}</div>
                </div>
                
            </div>
        </div>
    )
};