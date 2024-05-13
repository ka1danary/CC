import { USER_REQUEST } from "../../store/models/dbModels/models";
import { format } from "@formkit/tempo";

import styles from "./index.module.scss";

interface Props {
  request: USER_REQUEST | null;
}

export const CreateRequestCard: React.FC<Props> = ({ request }) => {
  const createReadbleDate = (
    date: Date | undefined,
    locale: string = "default"
  ) => {
    const checkDate = date ? date : new Date();
    const fullDate = format(checkDate, "full");
    const parseTimeFromDate = format(checkDate, "hh:mm", locale)
    return {
      fullDate,
      parseTimeFromDate,
    };
  };

  console.log(createReadbleDate(request?.end_date_and_time));

  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.Article}>
          <div className={styles.Title}>Дата</div>
          <div className={styles.TitleContent}>
            {createReadbleDate(request?.start_date_and_time).fullDate}
          </div>
        </div>
        <div className={styles.Article}>
          <div className={styles.Title}>С</div>
          <div className={styles.TitleContent}>
            {createReadbleDate(request?.start_date_and_time).parseTimeFromDate}
          </div>
        </div>
        <div className={styles.Article}>
          <div className={styles.Title}>До</div>
          <div className={styles.TitleContent}>
          {createReadbleDate(request?.end_date_and_time).parseTimeFromDate}

          </div>
        </div>
        <div className={styles.Article}>
          <div className={styles.Title}>Тип</div>
          <div className={styles.TitleContent}>{request?.device_type}</div>
        </div>
        <div className={styles.Article}>
          <div className={styles.Title}>Место</div>
          <div className={styles.TitleContent}>{request?.id_workstation}</div>
        </div>
      </div>
    </div>
  );
};
