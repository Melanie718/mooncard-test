import useFetch, { ApiResponse } from "./API";
import "./App.css";
import Pokemon from "./Models/Pokemon";
import { Card } from "react-bootstrap";
import ScrollUp from "./components/ScrollUp";
import { MdCatchingPokemon } from "react-icons/md";
import ErrorAlert from "./components/ErrorAlert";

function App() {
  const pokemons: ApiResponse = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );

  return (
    <div className="App">
      <h1>Pokédex </h1>
      {!pokemons.loading && pokemons.error !== undefined && (
        <ErrorAlert content={pokemons.error} />
      )}
      <div className="pokemon-list d-flex justify-content-center flex-wrap">
        {pokemons.loading && (
          <div className="loading">
            <h3>Une requête sauvage apparaît ! </h3>
            <MdCatchingPokemon size={90} />
            <h3>Chargement en cours ...</h3>
          </div>
        )}
        {!pokemons.loading &&
          pokemons.data &&
          pokemons.data.results.map((pokemon: Pokemon) => (
            <div className="pokemon-preview" key={pokemon.url.split("/")[6]}>
              <Card>
                <Card.Body>
                  <Card.Title className="pokemon-title">
                    #{pokemon.url.split("/")[6]} {pokemon.name}
                  </Card.Title>
                  <Card.Img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemon.url.split("/")[6]
                    }.png `}
                  />
                </Card.Body>
              </Card>
            </div>
          ))}
      </div>
      <ScrollUp />
    </div>
  );
}

export default App;
