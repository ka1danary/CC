import { USER_REQUEST } from "../../store/models/dbModels/models";

import styles from './index.module.scss'

interface Props {
    request : USER_REQUEST | null;
}

export const CreateRequestCard: React.FC<Props> = ({request}) => {
    return (
        <div className={styles.Container}>
            <div>
                {request?.start_date_and_time.getDate()}
                <div className={styles.Article}>
                    <div className={styles.Title}>Дата</div>
                    <div>{request?.start_date_and_time.getDate()}</div>
                </div>
                <div className={styles.Article}>
                    <div className={styles.Title}>С</div>
                    <div>{request?.start_date_and_time.getTime()}</div>
                </div>
                <div className={styles.Article}>
                    <div className={styles.Title}>До</div>
                    <div>{request?.end_date_and_time.getTime()}</div>
                </div>
                <div className={styles.Article}>
                    <div  className={styles.Title}>Тип</div>
                    <div>{request?.device_type}</div>
                </div>
                <div className={styles.Article}>
                    <div  className={styles.Title}>Место</div>
                    <div>{request?.id_workstation}</div>
                </div>
                
            </div>
        </div>
    )
};