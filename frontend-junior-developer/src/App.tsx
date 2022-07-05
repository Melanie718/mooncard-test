import useFetch, { ApiResponse } from "./API";
import "./App.css";
import Pokemon from "./Models/Pokemon";

function App() {
  const pokemons: ApiResponse = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );
  if (!pokemons.loading) console.log(pokemons);
  
  return (
    <div className="App">
      <h2>Application test mooncard ! </h2>
      {pokemons &&
        pokemons.data &&
        pokemons.data.results.map((pokemon: Pokemon) => (
          <div className="pokemon-list" key={pokemon.id}>
            {pokemon.name}
          </div>
        ))}
    </div>
  );
}

export default App;
