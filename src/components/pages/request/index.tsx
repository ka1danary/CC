import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ButtonPostReguest } from "../../buttonPostRequest";

interface Props {}

export const Request: React.FC<Props> = () => {
  const [page, setPage] = useState<number>(0);
  const [buttonBackDisable, setButtonBackDisable] = useState<boolean>(true);
  const [buttonForwardDisable, setButtonForwardDisable] =
    useState<boolean>(false);

  useEffect(() => {
    if (page != 0) {
      setButtonBackDisable(false);
    } else {
      setButtonBackDisable(true);
    }

    if (page != 3) {
      setButtonForwardDisable(false);
    } else {
      setButtonForwardDisable(true);
    }
  }, [page]);

  const whatPage = () => {
    if (page === 0) {
      return <div>Страница {page}</div>;
    } else if (page === 1) {
      return <div>Страница {page}</div>;
    } else if (page === 2) {
      return <div>Страница {page}</div>;
    } else if (page === 3) {
      return (
        <div>
          <div>Card</div>
          <div>
            <Link to="/">
              <ButtonPostReguest />
            </Link>
          </div>
        </div>
      );
    }
  };

  const incrementPage = () => {
    setPage(page + 1);
  };

  const decrementPage = () => {
    setPage(page - 1);
  };

  return (
    <div className={styles.Request}>
      <Link to="/">
        <button>Отмена</button>
      </Link>

      <div className={styles.Content}>
        <button onClick={decrementPage} disabled={buttonBackDisable}>
          {" "}
          назад{" "}
        </button>
        <div>{whatPage()}</div>
        <button onClick={incrementPage} disabled={buttonForwardDisable}>
          вперед
        </button>
      </div>
    </div>
  );
};
