import { IRequest } from "../../store/models/IRequest";
import styles from './index.module.scss'

interface Props {
    request : IRequest;
}

export const CreateRequestCard: React.FC<Props> = ({request}) => {
    return (
        <div className={styles.Container}>
            <div>
                <div className={styles.Article}>
                    <div className={styles.Title}>Дата</div>
                    <div>{request.date?.getDay()}</div>
                </div>
                <div className={styles.Article}>
                    <div  className={styles.Title}>Тип</div>
                    <div>{request.deviceType}</div>
                </div>
                <div className={styles.Article}>
                    <div  className={styles.Title}>Длительность</div>
                    <div>{request.packageType}</div>
                </div>
                <div className={styles.Article}>
                    <div  className={styles.Title}>Место</div>
                    <div>{request.place}</div>
                </div>
                
            </div>
        </div>
    )
};