import React from "react";
import styles from "./index.module.scss";

interface Props {
  placeholder?: string;
  setValue: (value: string) => void;
  value: string;
  type: "text" | "password" | "email" | "number"; 
  width: string;
  message: string;
}

export const CustomInput: React.FC<Props> = ({
  placeholder,
  setValue,
  value,
  type,
  width,
  message,
}) => {
  return (
    <div className={styles.Content}>
      <input
        placeholder={placeholder}
        className={styles.CustomInput}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        style={{ width }}
      />
      <div className={styles.Message}>{message}</div>
    </div>
  );
};
