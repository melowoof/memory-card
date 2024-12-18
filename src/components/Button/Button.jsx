/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

export default function Button({ text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.background}>
        <div className={styles.foreground}>{text}</div>
      </div>
    </button>
  );
}
