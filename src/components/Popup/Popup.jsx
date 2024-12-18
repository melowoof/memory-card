import styles from "./Popup.module.css";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
export default function Popup({ titleText, statusText }) {
  return (
    <div className={styles.page}>
      <div className={styles.popup}>
        <div className={styles.background}>
          <div className={styles.foreground}>
            <div className={styles.text}>
              <div className={styles.titleText}>{titleText}</div>
              <div className={styles.statusText}>{statusText}</div>
            </div>
            <Button text={"RESTART"} />
          </div>
        </div>
      </div>
    </div>
  );
}
