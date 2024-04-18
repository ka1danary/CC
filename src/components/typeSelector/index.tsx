import { deviceType } from "../../store/models/IModel";
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
          {el}
        </div>
      ))}
    </div>
  );
};
