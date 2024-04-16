import { Link } from "react-router-dom";
import { ListUserRequest } from "../../listUserRequests";

import styles from "./index.module.scss";
import { Header } from "../../header";
import { CustomButton } from "../../CustomButton";
import { requestAPI } from "../../../store/service/RequestService";

interface Props {}

export const Main: React.FC<Props> = () => {
  
  const { data: request } = requestAPI.useFetchRequestQuery(10) 
  return (
    <div>
      <Header/>
      <div className={styles.Main}>
        <div>
          <div className={styles.Title}>
            Мои записи
            </div>
            {request?.map(el => (
              <div>
                {el.id}
              </div>
            ))}
            <div className={styles.Content}>
              {/* {requests.length != 0 ? (
                <div>
                  <ListUserRequest />
                </div>
              ) : (
                <div>
                  <Link to="/req">
                    <CustomButton title='Забронировать' type="Upload"/>
                  </Link>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
  );
};
