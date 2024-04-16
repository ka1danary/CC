import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomSelector } from "../../customSelector";
import { Calendar } from "../../calendar";
import { DatePicker } from "../../datePicker";

import styles from "./index.module.scss";
import { Header } from "../../header";
import { CustomButton } from "../../CustomButton";

interface Props {}

interface RequestObject {
  id: string;
  deviceType: "PC" | "PS" | "VR";
  date: Date;
  sessionTime: 1 | 2 | 3;
  place: string;
}

export const Request: React.FC<Props> = () => {
  const [page, setPage] = useState<number>(0);
  const [buttonBackDisable, setButtonBackDisable] = useState<boolean>(true);
  const [buttonForwardDisable, setButtonForwardDisable] =
    useState<boolean>(false);

  const [deviceType, setDeviceType] = useState<"PC" | "PS" | "VR">();
  const [date, setStartDate] = useState<Date>();
  const [sessionTime, setSessionTime] = useState<1 | 2 | 3>();
  const [place, setPlace] = useState<string>();

  useEffect(() => {
    if (page != 0) {
      setButtonBackDisable(false);
    } else {
      setButtonBackDisable(true);
    }

    if (page != 3) {
      setButtonForwardDisable(false);
    } else {
      setButtonForwardDisable(true);
    }
  }, [page]);

  const whatPage = () => {
    if (page === 0) {
      return (
        <div>
          <div>Форма</div>{" "}
          <CustomSelector
            title="Выберите тип устройства"
            options={["PC", "PS", "VR"]}
            setOption={setDeviceType}
          />
        </div>
      );
    } else if (page === 1) {
      return (
        <div>
          <div>
            Дата
            <Calendar />
          </div>
          <div>
            <div>Время</div>
            <DatePicker />
          </div>
          <div>
            <div>Пакет</div>
            <button>1 час</button>
            <button>2 час</button>
            <button>3 час</button>
          </div>
        </div>
      );
    } else if (page === 2) {
      return (
        <div>
          <div>Укажите место</div>
        </div>
      );
    } else if (page === 3) {
      return (
        <div>
          <div>Card</div>
          <div>
            <Link to="/">
              <CustomButton />
            </Link>
          </div>
        </div>
      );
    }
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  return (
    <div className={styles.Request}>
      <Header/>
      <Link to="/">
        <button>Отмена</button>
      </Link>
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
              fill="#2e2e2e"
            />
          </svg>
        </button>
        <div>{whatPage()}</div>
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
              fill="#2e2e2e"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
