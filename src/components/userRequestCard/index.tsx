import { format } from "@formkit/tempo";
import styles from "./index.module.scss";
import { useClubStore } from "../../data/stores/useClubStore";

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

  const [deleteUserRequest] = useClubStore(state => [
    state.deleteUserRequest
  ])

  return (
    <div className={styles.UserRequestCard}>
      <button onClick={() => deleteUserRequest(id)}>
        Удалить
      </button>
      <div>
        <div>Номер {id}</div>
        <div>Тип устройства {deviceType}</div>
        <div>Дата {format(date, { date: "full", time: "short" })}</div>
        <div>Длительность {sessionTime} ч</div>
        <div>Место {place}</div>
      </div>
    </div>
  );
};
