import { useEffect } from "react";
import styles from "./index.module.scss";

interface Props {
  setAuth: (val : boolean) => void;
}

export const FEFUAuthorization: React.FC<Props> = ({ setAuth }) => {

  const helper = () => {
    setAuth(true)
  }

  useEffect(() => {
    setAuth(false)
  }, [])

  return (
    <div className={styles.Authorization}>
      <div>
        <button onClick={helper}>
          <div className={styles.Title}>Войти в аккаунт</div>
        </button>
      </div>
    </div>
  );
};
