/* eslint-disable react/prop-types */
import styles from "./Gameboard.module.css";
import cardStyles from "../Card/Card.module.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import shuffleArray from "../../utils/arrayUtils";

export default function Gameboard({
  cards,
  handleScore,
  setGameOver,
}) {
  const [deck, setDeck] = useState(cards);
  const [showFront, setShowFront] = useState(false);
  const [visibleDeck, setVisibleDeck] = useState([]);

  //   console.log("Array length:", deck);
  //   console.log("Hit deck length", hitDeck);
  //   console.log("Unhit deck length", unhitDeck);

  useEffect(() => {
    setTimeout(() => {
      setShowFront(false);
    }, 0);
    setDeck(cards);
    setVisibleDeck(shuffleArray(cards).slice(0, 8));
    setTimeout(() => {
      setShowFront(true);
    }, 1000);
  }, [cards]);

  function getVisibleDeck() {
    const hitDeck = deck.filter((card) => card.isHit);
    const unhitDeck = deck.filter((card) => !card.isHit);

    const count = Math.min(6, hitDeck.length, unhitDeck.length);
    const randomNbr =
      count === 0
        ? Math.floor(Math.random() * count)
        : Math.floor(Math.random() * count) + 1;

    let smallerArray;
    let largerArray;

    if (hitDeck.length < unhitDeck.length) {
      smallerArray = hitDeck;
      largerArray = unhitDeck;
    } else {
      smallerArray = unhitDeck;
      largerArray = hitDeck;
    }

    const shuffledSmallArray = shuffleArray(smallerArray, randomNbr).slice(
      0,
      randomNbr
    );
    const shuffledLargeArray = shuffleArray(largerArray, randomNbr).slice(
      0,
      8 - shuffledSmallArray.length
    );

    const combinedCards = [...shuffledSmallArray, ...shuffledLargeArray];
    return shuffleArray(combinedCards);
  }

  function shuffleDeck() {
    setShowFront(false);
    setTimeout(() => {
      setVisibleDeck(getVisibleDeck());
    }, 300);
  }

  function handleClick(card) {
    if (card.isHit) {
      console.log("Game over");
      setGameOver(-1);
    } else {
      card.hit();
      handleScore();
      shuffleDeck();
    }

    setTimeout(() => {
      setShowFront(true);
    }, 500);
  }

  return (
    <div className={styles.gameboard}>
      {visibleDeck.map((card) => {
        return (
          <div
            key={card.id}
            className={`${cardStyles.card} ${
              showFront ? "" : cardStyles.showFront
            }`}
          >
            <Card
              id={card.id}
              name={card.name}
              type={card.type}
              imgSrc={card.imgSrc}
              onClick={() => {
                handleClick(card);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
