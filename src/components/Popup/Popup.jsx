/* eslint-disable react/prop-types */
import styles from "./Popup.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";

export default function Popup({ titleText, statusText, buttonLogic }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    return () => {
      if (isExiting) {
        setIsVisible(false);
      }
    };
  }, [isExiting]);

  if (!isVisible) return null;

  const handleExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      buttonLogic();
      setIsVisible(false);
    }, 200);
  };

  return (
    <div className={`${styles.page} ${isExiting ? styles.fade : ""}`}>
      <div className={`${styles.popup} ${isExiting ? styles.exit : ""}`}>
        <div className={styles.background}>
          <div className={styles.foreground}>
            <div className={styles.text}>
              <div className={styles.titleText}>{titleText}</div>
              <div className={styles.statusText}>{statusText}</div>
            </div>
            <Button text={"RESTART"} onClick={handleExit} />
          </div>
        </div>
      </div>
    </div>
  );
}
