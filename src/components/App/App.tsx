import { useState, useEffect } from 'react'
import './App.css'
import Pokedex from '../Pokedex/Pokedex'
import { pokemonData } from '../data/pokemonData';
import { PokemonSchema, PokemonSpritesSchema, UnpatchedPokemonSchema } from '../types/PokemonSchema';

function App() {
  // Define correct useState types
  const [allPokemons, setAllPokemons] = useState<PokemonSchema[]>([]);
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonSchema[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonSchema | undefined>(undefined);
 
  const patchedPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      }catch(e){
        console.log("Exception while parsing the sprites: ", e);
      }

      const patchedPokemons: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites
      }
      return patchedPokemons;
    });
    return patchedPokemons;
  }

  const handleInputChange = (inputValue: string) => {
    
    // 1. Filter the Searched Pokemons
    const searchedPokemons = allPokemons.filter((pokemon: PokemonSchema) => {
      return (
        pokemon.name && (
          pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      )
    });

    // setSearchField(inputValue);
    setSearchedPokemons(searchedPokemons);
  }
    
  const handleClick = (pokemonName: string) => {
    // Find the selected pokemons from the allPokemons
    const selectedPokemon = allPokemons.find((pokemon: PokemonSchema) => pokemon.name === pokemonName);

    // Update the state
    setSelectedPokemon(selectedPokemon);
  }

  const onCloseClick = () => {
    setSelectedPokemon(undefined);
  }

  useEffect(() => {
    // Patch the stringified pokemon sprites
    const patchedPokemons: PokemonSchema[] = patchedPokemonData(pokemonData);

    // Update the state with the patched pokemons
    setAllPokemons(patchedPokemons);
    setSearchedPokemons(patchedPokemons);
  }, []);

  return (
    <div className="App"> 
      <h1>Pokedex</h1>
      <Pokedex 
        searchedPokemons = {searchedPokemons}
        onInputChange = {handleInputChange}
        selectedPokemon = {selectedPokemon}
        onPokemonClick={handleClick}
        onCloseClick = {onCloseClick}
      />
    </div>
  );
}

export default App;
