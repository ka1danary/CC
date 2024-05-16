import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.scss";

import { Calendar } from "../../calendar";
import { TimePicker } from "../../timePicker";
import { Header } from "../../header";
import { CustomButton } from "../../CustomButton";
import { TypeSelector } from "../../typeSelector";
import { TypePackage } from "../../typePackage";
import { CreateRequestCard } from "../../createRequestCard";
import { PlaceSwitch } from "../../places/PC/placeSwitchTypes";
import {
  device_type,
  package_type,
} from "../../../store/models/dbModels/models";
import { buildRequestObject } from "./helperCreate";
import { format } from "@formkit/tempo";

interface Props {}

export const Request: React.FC<Props> = () => {
  //const [sendRequest] = requestAPI.useCreateRequestMutation();

  //-------------------------------------------------------
  const [page, setPage] = useState<number>(0);
  const [buttonBackDisable, setButtonBackDisable] = useState<boolean>(true);
  const [buttonForwardDisable, setButtonForwardDisable] =
    useState<boolean>(false);
  //-------------------------------------------------------

  //-------------------------------------------------------
  const [deviceType, setDeviceType] = useState<device_type | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<number | -1>(-1);
  const [packageType, setPackageType] = useState<package_type | null>(null);
  const [place, setPlace] = useState<number | null>(null);

  //-------------------------------------------------------

  //-------------------------------------------------------
  const [leftArrowColor, setLeftArrowColor] = useState<string>("#F4F4F4");
  const [rightArrowColor, setRightArrowColor] = useState<string>("black");
  //-------------------------------------------------------

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    if (page != 0) {
      setButtonBackDisable(false);
      setLeftArrowColor("black");
    } else {
      setButtonBackDisable(true);
      setLeftArrowColor("#F4F4F4");
    }

    if (page != 3) {
      setButtonForwardDisable(false);
      setRightArrowColor("black");
    } else {
      setButtonForwardDisable(true);
      setRightArrowColor("#F4F4F4");
    }
  }, [page]);

  //-------------------------------------------------------

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
            <div className={styles.typeSelected}>{deviceType}</div>
          </div>
        </div>
      );
    } else if (page === 1) {
      return (
        <div className={styles.CreateDate}>
          <div className={styles.CreateTypeTitle}>
            {/* сделать нормально дату */}
            Дата
            <Calendar setDate={setStartDate} date={startDate} />
            
            <div className={styles.dateSelected}>{format((startDate != null ? startDate : new Date()), "full")}</div>
          </div>
          <div>
            <div className={styles.CreateTypeTitle}>Время </div>
            <TimePicker setTime={setStartTime} />
            <div className={styles.dateSelected}>{startTime}</div>
          </div>
          <div>
            <div className={styles.CreateTypeTitle}>Пакет</div>
            <TypePackage setType={setPackageType} types={[1, 2, 3]} />
            <div className={styles.dateSelected}>{packageType}</div>
          </div>
        </div>
      );
    } else if (page === 2) {
      return (
        <div className={styles.CreatePlace}>
          <div>
            <PlaceSwitch setValue={setPlace} value={place} />
          </div>
        </div>
      );
    } else if (page === 3) {
      const buildedRequest = buildRequestObject(
        1,
        deviceType,
        startDate,
        startTime,
        packageType,
        place
      );

      return (
        <div className={styles.CreateRequest}>
          <div className={styles.CreateTypeTitle}>Ваша заявка</div>
          <div>
            <CreateRequestCard request={buildedRequest} />
          </div>
          <div>
            <div className={styles.ButonConfirm}>
              <Link to="/">
                <CustomButton type={"White"} title="Подтвердить" />
              </Link>
            </div>
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
