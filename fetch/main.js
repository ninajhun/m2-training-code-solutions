async function getPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
      throw new Error(`Error. Status: ${res.status}`);
    }
    const pokemon = await res.json();
    console.log(pokemon);
  } catch (err) {
    console.error('Error', err);
  }
}

getPokemon(1);
