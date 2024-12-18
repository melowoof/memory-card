import styles from "./Page.module.css";
import { useState, useEffect } from "react";
import Healthbar from "../Healthbar/Healthbar.jsx";
import Button from "../Button/Button.jsx";
import Gameboard from "../Gameboard/Gameboard.jsx";
import Popup from "../Popup/Popup.jsx";

export default function Page() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState();

  function handleScore() {
    setScore(score + 1);
  }

  return (
    <div className={styles.page}>
      {/* <Popup
        titleText={"Game over"}
        statusText={`You finished with a score of ${score}`}
      /> */}
      <div className={styles.game}>
        <div className={styles.scoreboard}>
          <Healthbar maxValue={maxScore} currentValue={score} />
        </div>
        <Gameboard setMaxScore={setMaxScore} setScore={handleScore} />
      </div>
    </div>
  );
}
