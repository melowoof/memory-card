import styles from "./Page.module.css";
import { useState, useEffect } from "react";
import shuffleArray from "../../utils/arrayUtils.js";
import { pokemonNames } from "../../utils/pokemons.js";
import { fetchFromArray } from "../../utils/PokeAPI_api.js";
import Healthbar from "../Healthbar/Healthbar.jsx";
import Gameboard from "../Gameboard/Gameboard.jsx";
import Popup from "../Popup/Popup.jsx";

export default function Page() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState();

  useEffect(() => {
    generateCards();
  }, []);

  useEffect(() => {
    setMaxScore(cards.length);
  }, [cards]);

  async function generateCards() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    // const urlTCG = "https://api.pokemontcg.io/v2/cards?page=2&pageSize=40/";
      const pokemonsArray = await fetchFromArray(url, pokemonNames);
    shuffleArray(pokemonsArray);
    const slicedCards = pokemonsArray.slice(0, 14);
    setCards(slicedCards);
  }

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
        <Gameboard cards={cards} setScore={handleScore} />
      </div>
    </div>
  );
}
