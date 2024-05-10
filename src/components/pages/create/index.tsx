import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "../../calendar";
import { TimePicker } from "../../timePicker";
import { Header } from "../../header";
import { CustomButton } from "../../CustomButton";
import { TypeSelector } from "../../typeSelector";
import { deviceType, packageType } from "../../../store/models/IModel";
import { TypePackage } from "../../typePackage";
import { CreateRequestCard } from "../../createRequestCard";
import { IRequest } from "../../../store/models/IRequest";
import { requestAPI } from "../../../store/service/RequestService";

import styles from "./index.module.scss";
import { PlaceTypeOne } from "../../places/PC/placeTypeOne";
import { PlaceSwitch } from "../../places/PC/placeSwitchTypes";

interface Props {}

export const Request: React.FC<Props> = () => {
  const [sendRequest] = requestAPI.useCreateRequestMutation();

  const [page, setPage] = useState<number>(0);
  const [buttonBackDisable, setButtonBackDisable] = useState<boolean>(true);
  const [buttonForwardDisable, setButtonForwardDisable] =
    useState<boolean>(false);

  const [deviceType, setDeviceType] = useState<deviceType>();
  const [date, setDate] = useState<Date | undefined>();
  const [time, setTime] = useState<number | undefined>();
  const [packageType, setpackageType] = useState<packageType | undefined>(2);
  const [place, setPlace] = useState<number | undefined>();

  const [leftArrowColor, setLeftArrowColor] = useState<string>("black")
  const [rightArrowColor, setRightArrowColor] = useState<string>("black")

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (page != 0) {
      setButtonBackDisable(false);
      setLeftArrowColor("black")
     
    } else {
      setButtonBackDisable(true);
      setLeftArrowColor("gray")
    }

    if (page != 3) {
      setButtonForwardDisable(false);
      setRightArrowColor("black")
    } else {
      setButtonForwardDisable(true);
      setRightArrowColor("gray")
    }
  }, [page]);

  const createRequeset = (
    deviceType: deviceType,
    date: Date | undefined,
    time: number | undefined,
    packageType: packageType,
    place: number | undefined
  ) => {
    if ((deviceType && date && time && packageType && place) != undefined) {
      const newRequest: IRequest = {
        id: 1,
        deviceType,
        date,
        time,
        packageType,
        place,
      };
      sendRequest(newRequest);
    }
  };

  const whatPage = () => {
    if (page === 0) {
      return (
        <div className={styles.CreateType}>
          <div className={styles.CreateTypeTitle}>Тип устройства</div>{" "}
          <div className={styles.CreateTypeContent}>
            <TypeSelector
              setType={setDeviceType}
              options={["PC", "PS", "VR"]}
            />
          </div>
        </div>
      );
    } else if (page === 1) {
      return (
        <div className={styles.CreateDate}>
          <div className={styles.CreateTypeTitle}>
            {/* сделать нормально дату */}
            Дата {date?.getFullYear()}
            <Calendar setDate={setDate} date={date} />
          </div>
          <div >
            <div className={styles.CreateTypeTitle}>Время {time} </div>
            <TimePicker setTime={setTime} />
          </div>
          <div>
            <div className={styles.CreateTypeTitle}>Пакет {packageType}</div>
            <TypePackage setType={setpackageType} types={[1, 2, 3]} />
          </div>
        </div>
      );
    } else if (page === 2) {
      return (
        <div className={styles.CreatePlace}>
          <div>
            <PlaceSwitch setValue={setPlace} value={place}/>
          </div>
        </div>
      );
    } else if (page === 3) {
      return (
        <div className={styles.CreateRequest}>
          <div>Ваша заявка</div>
          <div>
            <CreateRequestCard
              request={{ id: 1, date, time, packageType, deviceType, place }}
            />
          </div>
          <div
            onClick={() =>
              createRequeset(deviceType, date, time, packageType, place)
            }
          >
            <Link to="/">
              <CustomButton type={"White"} title="Подтвердить" />
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles.Request}>
      <Header />
      <div className={styles.ButtonClose}>
        <Link to="/">
          <CustomButton type={"Cancel"} title="Отмена" />
        </Link>
      </div>
      <div className={styles.Content}>
        <button onClick={decrementPage} disabled={buttonBackDisable}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.17188 16.875L17.6719 27.375L15 30L0 15L15 0L17.6719 2.625L7.17188 13.125H30V16.875H7.17188Z"
              fill={leftArrowColor}
            />
          </svg>
        </button>
        <div className={styles.ContentPage}>{whatPage()}</div>
        <button onClick={incrementPage} disabled={buttonForwardDisable}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.8281 13.125L12.3281 2.625L15 0L30 15L15 30L12.3281 27.375L22.8281 16.875L0 16.875L0 13.125L22.8281 13.125Z"
              fill={rightArrowColor}
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
