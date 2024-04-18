import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { Header } from "../../header";
import { UserRequestCard } from "../../userRequestCard";

import { userApi, requestAPI } from "../../../store/service/RequestService";
import { CustomButton } from "../../CustomButton";
import { Link } from "react-router-dom";

interface Props {}

export const Main: React.FC<Props> = () => {
  const { data: user } = userApi.useFetchUserQuery(1);
  const { data: request } = requestAPI.useFetchRequestQuery(user);

  const [isEmpty, setIsEmpty] = useState(false);

  const checkRequest = () => {
    if (isEmpty && (request != undefined)) {
      console.log(false);
      return false;
    } else {
      console.log(true);
      console.log(request)
      return true;
    }
  };

  useEffect(() => {
    checkRequest();
  }, [request]);

  useEffect(() => {
    checkRequest();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <div>
          <div className={styles.Title}>Мои записи</div>
          {checkRequest() ? (
            <UserRequestCard request={request} isEmpty={setIsEmpty} />
          ) : (
            <div>
              <Link to="/create">
                <CustomButton type={"Upload"} title="Создать" />
              </Link>
            </div>
          )}
          <div className={styles.Content}></div>
        </div>
      </div>
    </div>
  );
};
