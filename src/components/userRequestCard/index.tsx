import { format } from "@formkit/tempo";
import { CustomButton } from "../CustomButton";
import { USER_REQUEST } from "../../store/models/dbModels/models";

import styles from "./index.module.scss";
import { deleteRequest } from "../../store/redusers/requestSlice";
import { useAppDispatch } from "../../store/hooks/redux";

interface Props {
  request: USER_REQUEST | undefined;
  isEmpty: (temp: boolean) => void;
}

export const UserRequestCard: React.FC<Props> = ({ request, isEmpty }) => {
  
  const dispatch = useAppDispatch();

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    isEmpty(true);
    dispatch(deleteRequest())
  };

  const convertDate = (date: Date | undefined | string) => {
    if (date != undefined) {
      return format(date, { date: "full", time: "short" });
    } else {
      return "";
    }
  };

  return (
    <div className={styles.UserRequestCard}>
      <div className={styles.Content}>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Тип устройства: </div>
          <div> {request?.device_type}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> C: </div>
          <div> {convertDate(request?.start_date_and_time)}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> До: </div>
          <div> {convertDate(request?.end_date_and_time)} ч</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Место: </div>
          <div> {request?.id_workstation}</div>
        </div>
      </div>
      <div className={styles.DeleteButton} onClick={handleRemove}>
        <CustomButton type={"Delete"} title="Отменить" />
      </div>
    </div>
  );
};
