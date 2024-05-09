import React from "react";
import styles from "./index.module.scss";

interface Props {
  setTime: (time: number) => void;
}

export const TimePicker: React.FC<Props> = ({ setTime }) => {
  const lengthRange = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  const midpoint = Math.ceil(lengthRange.length / 2); // Находим середину массива

  const handleSet = (time: number) => {
    setTime(time);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.Column}>
        {lengthRange.slice(0, midpoint).map((time, index) => (
          <div key={index} className={styles.TimePickerBlock} onClick={() => handleSet(time)}>
            <button>{time}:00</button>
          </div>
        ))}
      </div>
      <div className={styles.Column}>
        {lengthRange.slice(midpoint).map((time, index) => (
          <div key={index} className={styles.TimePickerBlock} onClick={() => handleSet(time)}>
            <button>{time}:00</button>
          </div>
        ))}
      </div>
    </div>
  );
};
