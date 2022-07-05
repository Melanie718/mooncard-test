import useFetch, { ApiResponse } from "./API";
import "./App.css";
import Pokemon from "./Models/Pokemon";
import { Card } from "react-bootstrap";
import ScrollUp from "./components/ScrollUp";

function App() {
  const pokemons: ApiResponse = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );
  if (!pokemons.loading) console.log(pokemons);

  return (
    <div className="App">
      <h1>Pokédex ! </h1>
      <div className="pokemon-list d-flex justify-content-center flex-wrap">
        {pokemons &&
          pokemons.data &&
          pokemons.data.results.map((pokemon: Pokemon) => (
            <div className="pokemon-preview">
              <Card style={{ width: "14rem" }}>
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
