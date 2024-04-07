import { Link } from "react-router-dom";

import { useClubStore } from "../../../data/stores/useClubStore";
import { ListUserRequest } from "../../listUserRequests";

import styles from "./index.module.scss";
import { Header } from "../../header";
import { CustomButton } from "../../CustomButton";

interface Props {}

export const Main: React.FC<Props> = () => {
  const [requests] = useClubStore((state) => [state.requests]);

  return (
    <div>
      <Header/>
      <div className={styles.Main}>
        <div>
          <div className={styles.Title}>
            Мои записи
            </div>
            <div className={styles.Content}>
              {requests.length != 0 ? (
                <div>
                  <ListUserRequest />
                </div>
              ) : (
                <div>
                  <Link to="/req">
                    <CustomButton title='Забронировать' type="Upload"/>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};
