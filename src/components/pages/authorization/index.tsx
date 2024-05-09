import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "../../CustomButton";
import { CustomInput } from "../../customInput";

import styles from "./index.module.scss";
import { useUtils } from "@mui/x-date-pickers/internals";

interface Props {
  setAuth: () => void;
}

export const Authorization: React.FC<Props> = ({ setAuth }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [messageLogin, setMessageLogin] = useState<string>("");
  const [messagePassword, setMessagePassword] = useState<string>("");

  const [link, setLink] = useState<string>("/auth");

  const width = "30vw";

  const confirmAuth = () => {
    if (login === "") {
      setMessageLogin("Заполните пустое поле");
    } else {
      setMessageLogin("");
    }
    if (password === "") {
      setMessagePassword("Заполните пустое поле");
    } else {
      setMessagePassword("");
    }
  };

  useEffect(() => {
    if (login != "" && password != "") {
      setLink("/");
    }
  }, [password, login]);

  return (
    <div className={styles.Authorization}>
      <div>
        <div className={styles.Title}>Регистрация</div>
        <div className={styles.Content}>
          <div className={styles.ContentForm}>
            <div className={styles.Input}>
              <div className={styles.InputTitle}>Логин</div>
              <div className={styles.InputContainer}>
                <CustomInput
                  placeholder="Логин"
                  setValue={setLogin}
                  value={login}
                  type={"text"}
                  width={width}
                  message={messageLogin}
                />
                <div></div>
              </div>
            </div>
            <div className={styles.Input}>
              <div className={styles.InputTitle}>Пароль</div>
              <div>
                <CustomInput
                  placeholder="Пароль"
                  setValue={setPassword}
                  value={password}
                  type={"password"}
                  width={width}
                  message={messagePassword}
                />{" "}
              </div>
            </div>
          </div>
          <div className={styles.ContentPost} onClick={() => confirmAuth()}>
            <Link to={link}>
              <CustomButton title="Отправить" type="White" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
