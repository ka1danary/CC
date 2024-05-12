import styles from "./index.module.scss";

interface Props {
  value: number | null;
  setValue: (value: number) => void;
}

export const PlaceTypeOne: React.FC<Props> = ({ setValue }) => {
  const handleSet = (el: number) => {
    setValue(el);
  };

  const rowPlaces = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
  ];

  return (
    <div>
      <div className={styles.Container}>
        {rowPlaces.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.Row}>
            {row.map((el, columnIndex) => (
              <div
                key={columnIndex}
                className={styles.Place}
                onClick={() => handleSet(el)}
              >
                {el}
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </div>
  );
};
