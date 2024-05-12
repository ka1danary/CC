import { device_type } from "../../store/models/dbModels/models";
import { CustomButton } from "../CustomButton";

import styles from "./index.module.scss";

interface Props {
  options: device_type[];
  setType: (type: device_type | null) => void;
}

export const TypeSelector: React.FC<Props> = ({ options, setType }) => {
  const handleSet = (type: device_type) => {
    const typeValue = type ?? "PC";
    setType(typeValue);
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
