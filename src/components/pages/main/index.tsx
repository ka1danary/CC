import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { UserRequestCard } from "../../userRequestCard";
import { useClubStore } from "../../../data/stores/useClubStore";
import { ListUserRequest } from "../../listUserRequests";

interface Props {}

export const Main: React.FC<Props> = () => {

  const [requests, deleteUserRequest] = useClubStore((state) => [state.requests, state.deleteUserRequest])

  return (
    <div className={styles.Main}>
      
      <div>

        <div>
          Мои записи
          {requests.length != 0 ? (
            <div>
              <ListUserRequest/>
            </div>
          ) : (
            <div>
              <Link to="/req">
                <button>Забронировать</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
