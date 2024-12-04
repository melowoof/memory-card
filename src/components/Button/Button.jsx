import styles from "./Button.module.css";

export default function Button({ text }) {
  return (
    <button className={styles.button}>
      <div className={styles.background}>
        <div className={styles.foreground}>{text}</div>
      </div>
    </button>
  );
}
