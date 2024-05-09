import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { Header } from "../../header";
import { UserRequestCard } from "../../userRequestCard";
import { CustomButton } from "../../CustomButton";
import { Link } from "react-router-dom";
import { IRequest } from "../../../store/models/IRequest";

import { userApi, requestAPI } from "../../../store/service/RequestService";

interface Props {}

export const Main: React.FC<Props> = () => {
  
  const { data: user } = userApi.useFetchUserQuery(1);
  const { data: request } = requestAPI.useFetchRequestQuery(user);


  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [updateRequest, setUpdateRequest] = useState<IRequest | undefined>(
    request
  );

  useEffect(() => {
    if (request === undefined) {
      console.log(999);
      setIsEmpty(true);
    } else {
      console.log(888);
      console.log(request);
      setIsEmpty(false);
    }
    setUpdateRequest(request);
  }, [request]);

  useEffect(() => {
    if (updateRequest === undefined) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }, [updateRequest]);

  return (
    <div>
      <Header />
      <div className={styles.Main}>
        <div>
          <div className={styles.Title}>Мои записи</div>
          
          {!isEmpty ? (
            <UserRequestCard request={updateRequest} isEmpty={setIsEmpty} />
          ) : (
            <div>
              <Link to="/create">
                <CustomButton type={"Upload"} title="Создать" />
              </Link>
            </div>
          )}
          <div className={styles.Content}>
            
          </div>
        </div>
      </div>
    </div>
  );
};
