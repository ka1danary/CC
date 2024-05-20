import React from "react";
import { PlaceTypeOne } from "../placeTypeOne";
import { PlaceTypeTwo } from "../placeTypeTwo";
import styles from "./index.module.scss";
import { device_type } from "../../../../store/models/dbModels/models";

interface Props {
  setValue: (place: number) => void;
  value: number | null;
  type: device_type | null | undefined;
}

export const PlaceSwitch: React.FC<Props> = (props) => {
  const [page, setPage] = React.useState<number>(0);
  const [buttonBackDisable, setButtonBackDisabled] =
    React.useState<boolean>(true);
  const [buttonForwardDisable, setButtonForwardDisabled] =
    React.useState<boolean>(false);

  const [colorArrowBack, setColorArrowBack] = React.useState<string>("#8E9C9F");
  const [colorArrowForward, setColorArrowForward] =
    React.useState<string>("#05141B");

  const switchPlacePagination = () => {
    if (props.type === "PC") {
      if (page === 0) {
        return (
          <div>
            <PlaceTypeOne setValue={props.setValue} value={props.value} />
          </div>
        );
      } else if (page === 1) {
        return (
          <div>
            <PlaceTypeTwo />
          </div>
        );
      }
    } else if (props.type === "VR") {
      return <div>VR</div>;
    } else if (props.type === "PS") {
      return <div>PS</div>;
    }
  };

  const pageIncrement = () => {
    setPage(page + 1);
  };

  const pageDecrement = () => {
    setPage(page - 1);
  };

  React.useEffect(() => {
    if (page === 0) {
      setButtonBackDisabled(true);
      setButtonForwardDisabled(false);
      setColorArrowBack("#8E9C9F");
      setColorArrowForward("#05141B");
    }
    if (page === 1) {
      setButtonBackDisabled(false);
      setButtonForwardDisabled(true);
      setColorArrowBack("#05141B");
      setColorArrowForward("#8E9C9F");
    }
  }, [page]);

  return (
    <div>
      <div className={styles.Title}>Выберите место</div>
      <div className={styles.Content}>
        <div className={styles.PaginationContainer}>
          <div className={styles.Pagination}>
            <button
              className={styles.Arrow}
              onClick={pageDecrement}
              disabled={buttonBackDisable}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 18L8 12L14 6L15.4 7.4L10.8 12L15.4 16.6L14 18Z"
                  fill={colorArrowBack}
                />
              </svg>
            </button>

            <div>{page + 1} Зал</div>

            <button
              className={styles.Arrow}
              onClick={pageIncrement}
              disabled={buttonForwardDisable}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.6 12L8 7.4L9.4 6L15.4 12L9.4 18L8 16.6L12.6 12Z"
                  fill={colorArrowForward}
                />
              </svg>
            </button>
          </div>
          <div>{switchPlacePagination()}</div>
        </div>
      </div>
    </div>
  );
};
