
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <div className={styles.Header}>
      
      <div className={styles.HeaderLogo}>
        <div>
          <svg
            width="53"
            height="34"
            viewBox="0 0 53 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.2448 34L0 17L10.3696 0H19.5869L9.21742 17L15.2279 26.8636L33.1634 0H42.6304L53 17L42.6304 34H33.4131L43.7826 17L37.7721 7.20729L19.9134 34H10.2448Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <Link to='/auth'>
      <button className={styles.HeaderRight}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z"
            fill="white"
          />
        </svg>
      </button>
      </Link>
     
    </div>
  );
};
