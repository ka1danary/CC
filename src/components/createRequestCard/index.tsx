import { USER_REQUEST } from "../../store/models/dbModels/models";
import { format } from "@formkit/tempo";

import styles from "./index.module.scss";

interface Props {
  request: USER_REQUEST | undefined;
}

export const CreateRequestCard: React.FC<Props> = ({ request }) => {
  const createReadableDate = (date: Date | undefined, locale: string = "default") => {
    const checkDate = date ? date : new Date();
    const fullDate = format(checkDate, "full");
    const parseTimeFromDate = format(checkDate, "hh:mm", locale);
    return {
      fullDate,
      parseTimeFromDate,
    };
  };

  // Преобразуйте строки в объекты Date
  const startDate = request?.start_date_and_time ? new Date(request.start_date_and_time) : undefined;
  const endDate = request?.end_date_and_time ? new Date(request.end_date_and_time) : undefined;

  console.log(createReadableDate(endDate));

  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.Article}>
          <div className={styles.Title}>Дата</div>
          <div className={styles.TitleContent}>
            {createReadableDate(startDate).fullDate}
          </div>
        </div>
        <div className={styles.Article}>
          <div className={styles.Title}>С</div>
          <div className={styles.TitleContent}>
            {createReadableDate(startDate).parseTimeFromDate}
          </div>
        </div>
        <div className={styles.Article}>
          <div className={styles.Title}>До</div>
          <div className={styles.TitleContent}>
            {createReadableDate(endDate).parseTimeFromDate}{" "}
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
