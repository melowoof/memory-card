/* eslint-disable react/prop-types */
import styles from "./Healthbar.module.css";
import H from "../../assets/H.svg";
import P from "../../assets/P.svg";
import { useState } from "react";

export default function Healthbar({ maxValue, currentValue }) {
  const [health, setHealth] = useState(currentValue);
  const [useAnimation, setUseAnimation] = useState(false);

  function animation() {
    setHealth((health + 1) % (maxValue + 1));

    setUseAnimation(true);
    setTimeout(() => {
      setUseAnimation(false);
    }, 100);
  }
  function healthColor(maxValue, currentValue) {
    const green = "#5abd40";
    const yellow = "#edb33e";
    const red = "#e56245";
    const health = healthPercentageValue(maxValue, currentValue);

    if (health < 33) return red;
    if (health >= 33 && health <= 66) return yellow;
    if (health > 66) return green;
  }

  function healthPercentageValue(maxHealth, currentHealth) {
    const value = (currentHealth / maxHealth) * 100;
    return value;
  }

  return (
    <div
      className={`${styles.scoreboard} ${
        useAnimation ? styles.useAnimation : ""
      }`}
      onClick={animation}
    >
      <div className={styles.level}>
        <div className={styles.maxLevel}>Lv 18</div>
      </div>
      <div className={styles.healthBar}>
        <div className={styles.background}>
          <div className={styles.foreground}>
            <div className={styles.hp}>
              <img src={H} draggable={false} />
              <img src={P} draggable={false} />
            </div>
            <div className={styles.maxHealth}>
              <div className={styles.healthShadow}></div>
              <div
                className={styles.currentHealth}
                style={{
                  backgroundColor: healthColor(maxValue, health),
                  width: `${healthPercentageValue(maxValue, health)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
