import { format } from "@formkit/tempo";
import { CustomButton } from "../CustomButton";
import { requestAPI } from "../../store/service/RequestService";

import styles from "./index.module.scss";
import { IRequest } from "../../store/models/IRequest";

interface Props {
  request : IRequest | undefined;
  isEmpty : (temp : boolean) => void
}

export const UserRequestCard: React.FC< Props> = ({request, isEmpty}) => {
 
  const [deleteRequest] = requestAPI.useDeleteRequestMutation();

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    isEmpty(true)
    console.log(request?.id)
    deleteRequest(request)
    console.log(request)
  }

  const convertDate = () => {
    const date = request?.date;
    if( date != undefined) {
      return (format(date, { date: "full", time: "short" }))
      console.log(9)
    }
    else {
      return ''
    }
  }

  return (
    <div className={styles.UserRequestCard}>
      <div className={styles.DeleteButton} onClick={handleRemove}>
        <CustomButton type={"Delete"} title="Удалить" />
      </div>
      <div className={styles.Content}>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Тип устройства: </div>
          <div> {request?.deviceType}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Дата: </div>
          <div> {convertDate()}</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Длительность: </div>
          <div> {request?.packageType} ч</div>
        </div>
        <div className={styles.ContentBox}>
          <div className={styles.ContentBoxTitle}> Место: </div>
          <div> {request?.place}</div>
        </div>
      </div>
    </div>
  );
};
