import React from "react";
import styles from "./index.module.scss";

interface Props {
  type: "Delete" | "Upload" | "Back" | "White" | "Cancel";
  title?: string;
}

export const CustomButton: React.FC<Props> = ({ title = "Button", type }) => {
  const getButtonClass = () => {
    switch (type) {
      case "Delete":
        return styles.Delete;
      case "Upload":
        return styles.Upload;
      case "Back":
        return styles.Back;
      case "White":
        return styles.White;
      case "Cancel":
        return styles.Cancel;
      default:
        return "";
    }
  };

  return (
    <button className={`${styles.CustomButton} ${getButtonClass()}`}>
      {title}
    </button>
  );
};
