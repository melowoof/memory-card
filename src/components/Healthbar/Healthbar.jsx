/* eslint-disable react/prop-types */
import styles from "./Healthbar.module.css";
import H from "../../assets/images/H.svg";
import P from "../../assets/images/P.svg";
import { useState, useEffect } from "react";

export default function Healthbar({ maxValue, currentValue }) {
  // const [health, setHealth] = useState(currentValue);
  const [useAnimation, setUseAnimation] = useState(false);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestScore") ? localStorage.getItem("bestScore") : 0
  );
  
  useEffect(() => {
    animation();
  }, [currentValue])

  if (currentValue > bestScore) {
    setBestScore(currentValue);
    localStorage.setItem("bestScore", currentValue);
  }

  function animation() {
    // setHealth((health + 1) % (maxValue + 1));
    setUseAnimation(true);
    setTimeout(() => {
      setUseAnimation(false);
    }, 100);
  }
  function healthColor() {
    const green = "#5abd40";
    const yellow = "#edb33e";
    const red = "#e56245";
    const health = healthPercentageValue();

    if (health < 33) return red;
    if (health >= 33 && health <= 66) return yellow;
    if (health > 66) return green;
  }

  function healthPercentageValue() {
    const value = (currentValue / maxValue) * 100;
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
        <div className={styles.currentLevel}>Current: Lv {currentValue}</div>
        <div className={styles.maxLevel}>Best: Lv {bestScore}</div>
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
                  backgroundColor: healthColor(),
                  width: `${healthPercentageValue()}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
