/* eslint-disable react/prop-types */
import styles from "./Card.module.css";
import cardBack from "../../assets/images/pokemon-card-back.webp";
import normalBg from "../../assets/images/card_backgrounds/colorless.webp";
import fireBg from "../../assets/images/card_backgrounds/fire_classic.webp";
import darkBg from "../../assets/images/card_backgrounds/darkness_modern.webp";
import dragonBg from "../../assets/images/card_backgrounds/dragon_old.webp";
import fightingBg from "../../assets/images/card_backgrounds/fighting.webp";
import grassBg from "../../assets/images/card_backgrounds/grass.webp";
import electricBg from "../../assets/images/card_backgrounds/lightning.webp";
import steelBg from "../../assets/images/card_backgrounds/metal_modern.webp";
import psychicBg from "../../assets/images/card_backgrounds/psychic.webp";
import waterBg from "../../assets/images/card_backgrounds/water.webp";
import { useMemo } from "react";
// import { useState } from "react";

const backgroundImages = {
  normal: normalBg,
  fire: fireBg,
  dark: darkBg,
  dragon: dragonBg,
  fighting: fightingBg,
  grass: grassBg,
  electric: electricBg,
  steel: steelBg,
  psychic: psychicBg,
  water: waterBg,
};

export default function Card({ name, type, imgSrc, onClick }) {
  const backgroundImage = useMemo(() => {
    return backgroundImages[type] || normalBg;
  }, [type]);

  //   function getBackground(type) {
  //     if (type === "normal") return normalBg;
  //     if (type === "fire") return fireBg;
  //     if (type === "dark") return darkBg;
  //     if (type === "dragon") return dragonBg;
  //     if (type === "fighting") return fightingBg;
  //     if (type === "grass") return grassBg;
  //     if (type === "electric") return electricBg;
  //     if (type === "steel") return steelBg;
  //     if (type === "psychic") return psychicBg;
  //     if (type === "water") return waterBg;
  //   }

  return (
    <div className={`${styles.card} `} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.cardFront}>
          <div className={styles.cardFrontImage}>
            <div className={styles.pokemonBg}>
              <img
                src={backgroundImage}
                draggable={false}
                width={200}
                height={270}
              />
            </div>
            <div className={styles.pokemonImage}>
              <img src={imgSrc} draggable={false} width={200} height={270} />
            </div>
            <span className={styles.name}>{name}</span>
            <div className={styles.border}></div>
          </div>
        </div>
        <div className={styles.cardBack}>
          <img src={cardBack} draggable={false} />
        </div>
      </div>
    </div>
  );
}
