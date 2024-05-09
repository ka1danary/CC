import styles from "./index.module.scss";

interface Props {
  setAuth: () => void;
}

export const FEFUAuthorization: React.FC<Props> = ({ setAuth }) => {

  const helper = () => {
    setAuth()
  }

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
