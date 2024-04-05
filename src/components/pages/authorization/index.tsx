import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface Props {
  setAuth: () => void;
}

export const Authorization: React.FC<Props> = ({ setAuth }) => {
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>Регистрация</div>
      <div className={styles.Content}>
        <div className={styles.ContentForm}>
          <div>
            <div>Логин</div>
            <input placeholder="Логин" />
          </div>
          <div>
            <div>Пароль</div>
            <input placeholder="Пароль" />
          </div>
        </div>
        <div className={styles.ContentPost}>
          <Link to="/">
            <button onClick={setAuth}>Отправить</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
