/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import cardBack from "../../assets/images/pokemon-card-back.webp";
// import { useState } from "react";

export default function Card({ id, cardImgSrc, onClick }) {
  //   const [showFront, setShowFront] = useState(true);
  //   function flipCard() {
  //     setShowFront(false);
  //     setTimeout(() => {
  //       setShowFront(true);
  //     }, 500);
  //   }

  return (
    <div className={`${styles.card} `} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.cardFrontImage}>
            <img src={cardImgSrc} draggable={false} width={200} height={270} />
          </div>
        </div>
        <div className={styles.cardBack}>
          <img src={cardBack} draggable={false} width={200} height={270} />
        </div>
      </div>
    </div>
  );
}
