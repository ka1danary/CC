import { deviceType } from "../../store/models/IModel";
import { CustomButton } from "../CustomButton";
import styles from "./index.module.scss";

interface Props {
  options: deviceType[];
  setType: (type: deviceType) => void;
}

export const TypeSelector: React.FC<Props> = ({ options, setType }) => {
  const handleSet = (el: deviceType) => {
    setType(el);
  };

  return (
    <div className={styles.Container}>
      {options.map((el, index) => (
        <div key={index} onClick={() => handleSet(el)}>
          <CustomButton title={el} type={"White"} />
        </div>
      ))}
    </div>
  );
};
