/* eslint-disable react/prop-types */
import styles from "./Gameboard.module.css";
import cardStyles from "../Card/Card.module.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import shuffleArray from "../../utils/arrayUtils";
import { fetchFromArray } from "../../utils/PokeAPI_api";
import { pokemonNames } from "../../utils/pokemons";

export default function Gameboard({ setMaxScore, setScore }) {
  const [deck, setDeck] = useState([]);
  const [showFront, setShowFront] = useState(false);
  const [visibleDeck, setVisibleDeck] = useState([]);
  //   const hitDeck = deck.filter((card) => card.isHit);
  //   const unhitDeck = deck.filter((card) => !card.isHit);

  //   console.log("Array length:", deck);
  //   console.log("Hit deck length", hitDeck);
  //   console.log("Unhit deck length", unhitDeck);

  useEffect(() => {
    generateDeck();
  }, []);

  useEffect(() => {
    setMaxScore(deck.length);
  }, [deck, setMaxScore]);

  async function generateDeck() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    // const urlTCG = "https://api.pokemontcg.io/v2/cards?page=2&pageSize=40/";
    const pokemonsArray = await fetchFromArray(url, pokemonNames);
    shuffleArray(pokemonsArray);
    const cards = pokemonsArray.slice(0, 14);
    setDeck(cards);
    setVisibleDeck(shuffleArray(cards).slice(0, 8));
    setTimeout(() => {
      setShowFront(true);
    }, 1000);
  }

  function getVisibleDeck() {
    const hitDeck = deck.filter((card) => card.isHit);
    const unhitDeck = deck.filter((card) => !card.isHit);

    const count = Math.min(6, hitDeck.length, unhitDeck.length);
    const randomNbr =
      count === 0
        ? Math.floor(Math.random() * count)
        : Math.floor(Math.random() * count) + 1;

    // console.log("count, randomNbr", count, randomNbr);

    let smallerArray;
    let largerArray;

    if (hitDeck.length < unhitDeck.length) {
      smallerArray = hitDeck;
      largerArray = unhitDeck;
    } else {
      smallerArray = unhitDeck;
      largerArray = hitDeck;
    }

    // console.log(
    //   "smallerArray, largerArray",
    //   smallerArray.length,
    //   largerArray.length
    // );

    const shuffledSmallArray = shuffleArray(smallerArray, randomNbr).slice(
      0,
      randomNbr
    );
    const shuffledLargeArray = shuffleArray(largerArray, randomNbr).slice(
      0,
      8 - shuffledSmallArray.length
    );

    // console.log(
    //   "shuffledSmallerArray, shuffledLargerArray",
    //   shuffledSmallArray,
    //   shuffledLargeArray
    // );

    const combinedCards = [...shuffledSmallArray, ...shuffledLargeArray];

    return shuffleArray(combinedCards);
  }

  function shuffleDeck() {
    setShowFront(false);
    setTimeout(() => {
      setVisibleDeck(getVisibleDeck());
    }, 300);
  }

  function isGameOver(isHit) {
    if (isHit) {
      return true;
    }
    return false;
  }

  function handleClick(card) {
    if (isGameOver(card.isHit)) {
      console.log("Game over");
    } else {
      card.hit();
      setScore();
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
              name={`${card.isHit}`}
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
