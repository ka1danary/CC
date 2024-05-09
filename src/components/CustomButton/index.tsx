import styles from "./index.module.scss";

interface Props {
  type: "Delete" | "Upload" | "Back" | "White" | "Cancel";
  title: string | undefined;
}

export const CustomButton: React.FC<Props> = ({ title, type }) => {
  let root = styles.CustomButton;

  if (type === "Delete") {
    root += ` ${styles.Delete}`;
  } else if (type === "Upload") {
    root += ` ${styles.Upload}`;
  } else if (type === "Back") {
    root += ` ${styles.Back}`;
  } else if (type === "White") {
    root += ` ${styles.White}`;
  } else if (type === "Cancel") {
    root += ` ${styles.Cancel}`;
  }

  return <button className={root}>{title}</button>;
};
