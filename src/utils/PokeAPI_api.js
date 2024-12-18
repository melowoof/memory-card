function onError(error) {
  throw new Error("Couldn't fetch data", error);
}

function onSuccess(jsonData) {
  const pokemon = {};
  pokemon.id = jsonData.name;
  pokemon.name = jsonData.name;
  pokemon.type = jsonData.types[0].type.name;
  pokemon.imgSrc = jsonData.sprites.other.home.front_default;
  pokemon.isHit = false;
  pokemon.hit = () => {
    pokemon.isHit = true;
  };
  return pokemon;
}

export async function fetchFromArray(url, suffixArray) {
  const array = [];

  for (const suffix of suffixArray) {
    try {
      const response = await fetch(url + suffix, { mode: "cors" });
      const json = await response.json();
      const customObject = onSuccess(json);
      array.push(customObject);
      // console.log(array);
    } catch (error) {
      return onError(error);
    }
  }

  return array;
}
