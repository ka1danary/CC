import styles from './index.module.scss'

interface Props {

}

export const PSPlace: React.FC<Props> = () => {

    const rowPlaces = [1, 2]
    

    return (
        <div className={styles.Container}>
            {rowPlaces.map((place, id) => (
                <div key={id} className={styles.Place}>
                    {place}
                </div>
            ))}
        </div>
    )
};