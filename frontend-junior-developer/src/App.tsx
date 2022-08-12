import useFetch, { ApiResponse } from "./API";
import "./App.css";
import Pokemon from "./Models/Pokemon";
import { Card, InputGroup, Form } from "react-bootstrap";
import ScrollUp from "./components/ScrollUp";
import { MdCatchingPokemon } from "react-icons/md";
import ErrorAlert from "./components/ErrorAlert";
import { useState } from "react";

function App() {
  const pokemons: ApiResponse = useFetch(
    "https://pokeapi.co/api/v2/pokemon?limit=865&offset=0"
  );
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <h1>Pokédex </h1>
      <InputGroup id="search-bar">
        <Form.Control
          placeholder={"Looking for a specific pokemon?"}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </InputGroup>
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
          pokemons.data.results
            .filter((pokemon: Pokemon) =>
              pokemon.name.includes(inputValue.toLowerCase())
            )
            .map((pokemon: Pokemon) => (
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
