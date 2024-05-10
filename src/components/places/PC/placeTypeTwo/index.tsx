import styles from './index.module.scss'

interface Props {

}

export const PlaceTypeTwo: React.FC<Props> = () => {

    const rowPlaces = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
    

    return (
        <div className={styles.Container}>
            {rowPlaces.map((place, id) => (
                <div key={id} className={styles.Place}>
                    {place.map((el, id_el) => (
                        <div key={id_el} className={styles.Element}>
                            {el}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
};