import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "@formkit/tempo";

import { Calendar } from "../../calendar";
import { TimePicker } from "../../timePicker";
import { Header } from "../../header";
import { CustomButton } from "../../CustomButton";
import { TypeSelector } from "../../typeSelector";
import { TypePackage } from "../../typePackage";
import { CreateRequestCard } from "../../createRequestCard";
import { PlaceSwitch } from "../../places/PC/placeSwitchTypes";
import { buildRequestObject } from "./helperCreate";
import { useSetFieldInRequest } from "./hooks/useSetFieldRequest";
import { package_type } from "../../../store/models/dbModels/models";

import styles from "./index.module.scss";

interface Props {}

export const Request: React.FC<Props> = () => {
  const {
    data: { device, startDate, endDate, indexPlace },
    setDeviceTypeHelper,
    setStartDateAndTimeHelper,
    setEndDateANdTimeHelper,
    setPlaceHelper,
    setFullRequest,
  } = useSetFieldInRequest();

  const [page, setPage] = useState<number>(0);
  const [buttonBackDisable, setButtonBackDisable] = useState<boolean>(true);
  const [buttonForwardDisable, setButtonForwardDisable] =
    useState<boolean>(false);

  const [choseStartDate, setChoseStartDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<number>(1);
  const [packageType, setPackage] = useState<package_type>(1);

  const [leftArrowColor, setLeftArrowColor] = useState<string>("#F4F4F4");
  const [rightArrowColor, setRightArrowColor] = useState<string>("black");

  const incrementPage = () => setPage((prev) => prev + 1);
  const decrementPage = () => setPage((prev) => prev - 1);

  useEffect(() => {
    setButtonBackDisable(page === 0);
    setLeftArrowColor(page === 0 ? "#F4F4F4" : "black");

    setButtonForwardDisable(page === 3);
    setRightArrowColor(page === 3 ? "#F4F4F4" : "black");

    if (page === 2) {
      setStartDateAndTimeHelper(choseStartDate, startTime);
      setEndDateANdTimeHelper(choseStartDate, startTime, packageType);
    }
  }, [page, choseStartDate, startTime, packageType]);

  const renderPageContent = () => {
    switch (page) {
      case 0: {
        return (
          <div className={styles.CreateType}>
            <div className={styles.CreateTypeTitle}>Тип устройства</div>
            <div className={styles.CreateTypeContent}>
              <TypeSelector
                setType={setDeviceTypeHelper}
                options={["PC", "PS", "VR"]}
              />
              <div className={styles.typeSelected}>{device}</div>
            </div>
          </div>
        );
      }
      case 1: {
        return (
          <div className={styles.CreateDate}>
            <div className={styles.CreateTypeTitle}>Дата</div>
            <Calendar setDate={setChoseStartDate} date={choseStartDate} />
            <div className={styles.dateSelected}>
              {format(startDate != null ? startDate : new Date(), "full")}
            </div>
            <div>
              <div className={styles.CreateTypeTitle}>Время</div>
              <TimePicker setTime={setStartTime} />
              <div className={styles.dateSelected}>{startTime}</div>
            </div>
            <div>
              <div className={styles.CreateTypeTitle}>Пакет</div>
              <TypePackage setType={setPackage} types={[1, 2, 3]} />
              <div className={styles.dateSelected}>{packageType}</div>
            </div>
          </div>
        );
      }
      case 2: {
        return (
          <div className={styles.CreatePlace}>
            <PlaceSwitch setValue={setPlaceHelper} value={3} type={device} />
          </div>
        );
      }
      case 3: {
        const endRequest = buildRequestObject(
          1,
          device,
          startDate,
          endDate,
          indexPlace
        );

        return (
          <div className={styles.CreateRequest}>
            <div className={styles.CreateTypeTitle}>Ваша заявка</div>
            <CreateRequestCard request={endRequest} />
            <div className={styles.ButonConfirm}>
              <Link to="/" onClick={() => setFullRequest(endRequest)}>
                <CustomButton type="White" title="Подтвердить" />
              </Link>
            </div>
          </div>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className={styles.Request}>
      <Header />
      <div className={styles.ButtonClose}>
        <Link to="/">
          <CustomButton type="Cancel" title="Отмена" />
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
        <div className={styles.ContentPage}>{renderPageContent()}</div>
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
