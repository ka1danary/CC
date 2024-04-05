import styles from './index.module.scss'

interface Props {}

export const Header: React.FC<Props> = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderLeftSide}>
                <div>
                    Уведомления
                </div>
                <div>Остаток часов</div>
            </div>
            <div className={styles.HeaderLogo}>
                <div>logo</div>
            </div>
            <button className={styles.HeaderLeft} >
                exit
            </button>
        </div>
    )
};