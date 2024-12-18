import "./App.css";
import Healthbar from "./components/Healthbar/Healthbar.jsx";
import Button from "./components/Button/Button.jsx";
import Gameboard from "./components/Gameboard/Gameboard.jsx";
import Card from "./components/TCG_Card/Card.jsx";
import Page from "./components/Page/Page.jsx";
import { useState, useEffect } from "react";

function App() {
  // const [deck, setDeck] = useState([]);

  // useEffect(() => {
  //   fetchCards();
  // }, []);

  // function fetchCards() {
  //   const fetchPokemons = async () => {
  //       const url = "https://pokeapi.co/api/v2/pokemon/";
  //     // const urlTCG = "https://api.pokemontcg.io/v2/cards?page=2&pageSize=40/";
  //       const pokemonsArray = await fetchFromArray(url, pokemonNames);
  //     // const pokemonsArray = await fetchTCG(urlTCG);
  //     setDeck(pokemonsArray);
  //   };
  //   fetchPokemons();
  // }

  return (
    <>
      {/* <Healthbar maxValue={50} currentValue={0} /> */}
      {/* <Button text={"RESTART"} /> */}
      {/* <Card
        id={"g1-1"}
        cardImgSrc={"https://images.pokemontcg.io/g1/1.png"}
      /> */}
      {/* <Gameboard /> */}
      <Page />
    </>
  );
}

export default App;
