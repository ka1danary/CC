import { format } from "@formkit/tempo";
import { useClubStore } from "../../data/stores/useClubStore";
import { CustomButton } from "../CustomButton";

import styles from "./index.module.scss";

interface Props {
  id: string;
  deviceType: "PC" | "PS" | "VR";
  date: Date;
  sessionTime: 1 | 2 | 3;
  place: string;
}

export const UserRequestCard: React.FC<Props> = ({
  id,
  deviceType,
  date,
  sessionTime,
  place,
}) => {
  const [deleteUserRequest] = useClubStore((state) => [
    state.deleteUserRequest,
  ]);

  return (
    <div className={styles.UserRequestCard}>
      <div
        onClick={() => deleteUserRequest(id)}
        className={styles.DeleteButton}
      >
        <CustomButton type={"Delete"} title="Удалить" />
      </div>
      <div className={styles.Content}>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Тип устройства: </div>
          <div> {deviceType}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Дата: </div>
          <div> {format(date, { date: "full", time: "short" })}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Длительность: </div>
          <div> {sessionTime}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Место: </div>
          <div> {place}</div>
        </div>
      </div>
    </div>
  );
};
