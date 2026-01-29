const pokemons = [
  { id: 1,   name: "Bulbasaur",   types: "Grass Poison", candy: 25,  weight: "6.9 kg",  time: "20:00", img: "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png" },
  { id: 2,   name: "Ivysaur",     types: "Grass Poison", candy: 100, weight: "13.0 kg", time: "07:00", img: "https://img.pokemondb.net/sprites/home/normal/ivysaur.png" },
  { id: 3,   name: "Venusaur",    types: "Grass Poison", candy: "undef", weight: "100.0 kg", time: "11:30", img: "https://img.pokemondb.net/sprites/home/normal/venusaur.png" },
  { id: 4,   name: "Charmander",  types: "Fire",         candy: 25,  weight: "8.5 kg",  time: "19:00", img: "https://img.pokemondb.net/sprites/home/normal/charmander.png" },
  { id: 5,   name: "Charmeleon",  types: "Fire",         candy: 100, weight: "19.0 kg", time: "19:00", img: "https://img.pokemondb.net/sprites/home/normal/charmeleon.png" },
  { id: 7,   name: "Squirtle",    types: "Water",        candy: 25,  weight: "9.0 kg",  time: "04:25", img: "https://img.pokemondb.net/sprites/home/normal/squirtle.png" },
  { id: 8,   name: "Wartortle",   types: "Water",        candy: 100, weight: "22.5 kg", time: "07:20", img: "https://img.pokemondb.net/sprites/home/normal/wartortle.png" },
  { id: 10,  name: "Caterpie",    types: "Bug",          candy: 12,  weight: "2.9 kg",  time: "16:35", img: "https://img.pokemondb.net/sprites/home/normal/caterpie.png" },
  { id: 11,  name: "Metapod",     types: "Bug",          candy: 50,  weight: "9.9 kg",  time: "09:11", img: "https://img.pokemondb.net/sprites/home/normal/metapod.png" },
  { id: 12,  name: "Butterfree",  types: "Bug Flying",   candy: "undef", weight: "32.0 kg", time: "09:37", img: "https://img.pokemondb.net/sprites/home/normal/butterfree.png" },
];

const searchInput = document.getElementById("searchInput");
const pokemonList = document.getElementById("pokemonList");

function renderPokemons(filtered = pokemons) {
  pokemonList.innerHTML = "";

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "poke-card";

    card.innerHTML = `
      <div class="number">#${String(p.id).padStart(3, '0')}</div>
      <img src="${p.img}" alt="${p.name}">
      <div class="name">${p.name}</div>
      <div class="types">${p.types}</div>
      <div class="info">
        Candy: ${p.candy} • ${p.weight} • ${p.time}
      </div>
    `;

    pokemonList.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  if (!query) {
    renderPokemons(pokemons);
    return;
  }

  const filtered = pokemons.filter(p => 
    p.name.toLowerCase().includes(query)
  );

  renderPokemons(filtered);
});

renderPokemons();