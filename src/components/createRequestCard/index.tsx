import React from "react";
import { USER_REQUEST } from "../../store/models/dbModels/models";
import { createReadableDate, extractDatesFromRequest } from "./helper";
import styles from "./index.module.scss";

interface Props {
  request: USER_REQUEST | undefined;
}

export const CreateRequestCard: React.FC<Props> = ({ request }) => {
  const { startDate, endDate } = extractDatesFromRequest(request);
  const readableStartDate = createReadableDate(startDate);
  const readableEndDate = createReadableDate(endDate);

  return (
    <div className={styles.Container}>
      <div className={styles.Article}>
        <div className={styles.Title}>Дата</div>
        <div className={styles.TitleContent}>{readableStartDate.fullDate}</div>
      </div>
      <div className={styles.Article}>
        <div className={styles.Title}>С</div>
        <div className={styles.TitleContent}>
          {readableStartDate.parseTimeFromDate}
        </div>
      </div>
      <div className={styles.Article}>
        <div className={styles.Title}>До</div>
        <div className={styles.TitleContent}>
          {readableEndDate.parseTimeFromDate}
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
  );
};
