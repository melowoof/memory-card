function onError(error) {
  throw new Error("Couldn't fetch data", error);
}

function onSuccess(jsonData) {
  const cardsArray = jsonData.data;
  const pokemonsArray = [];

  for (const card of cardsArray) {
    const pokemon = {};
    pokemon.id = card.id;
    pokemon.name = card.name;
    pokemon.type = card.types[0];
    pokemon.cardImgSrc = card.images.small;
    pokemon.isHit = false;
    pokemon.hit = () => {
      pokemon.isHit = true;
    };
    pokemonsArray.push(pokemon);
  }

  return pokemonsArray;
}

export async function fetchTCG(url) {
  let array = [];

  try {
    const response = await fetch(url + name, { mode: "cors" });
    const json = await response.json();
    array = onSuccess(json);
    console.log(array);
  } catch (error) {
    onError(error);
  }

  return array;
}
