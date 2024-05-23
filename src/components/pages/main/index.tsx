import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { Header } from "../../header";
import { UserRequestCard } from "../../userRequestCard";
import { CustomButton } from "../../CustomButton";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks/redux";
import { USER_REQUEST } from "../../../store/models/dbModels/models";

interface Props {}

export const Main: React.FC<Props> = () => {
  const reduxRequest = useAppSelector((state) => state.requestReduser);

  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [updateRequest, setUpdateRequest] = useState<USER_REQUEST | undefined>(
    reduxRequest.request
  );

  useEffect(() => {
    
    if (reduxRequest.request === undefined) {
      console.log('empty request');
      setIsEmpty(true);
    } else {
      console.log('equest has already been created');
      setIsEmpty(false);
    }
    setUpdateRequest(reduxRequest.request);
  }, [updateRequest]);

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
          <div className={styles.Content}></div>
        </div>
      </div>
    </div>
  );
};
