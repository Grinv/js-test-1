
function getPokemonData(url) {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Is error ${res.status}`).message;
      }
      return res.json();
    })
    .then(({ abilities }) => {
      console.log(abilities[0].ability.url);
      return fetch(`${abilities[0].ability.url}`);
    })
    .then((res) => res.json())
    .then(({ effect_entries }) => {
      console.log(effect_entries[0].effect);
    })
    .catch((error) => console.log(error));
}

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

console.log(getPokemonData(pokeUrl));
