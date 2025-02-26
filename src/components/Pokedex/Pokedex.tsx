import './Pokedex.css';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBox from '../SearchBox/SearchBox';
import Pokelist from '../Pokelist/Pokelist';
import { PokemonSchema } from '../types/PokemonSchema';

interface PokedexProps {
  searchedPokemons: PokemonSchema[];
  onInputChange: (inputValue: string) => void; 
  selectedPokemon: PokemonSchema | undefined;
  onPokemonClick: (pokemonName: string) => void; 
  onCloseClick: () => void;
}

const Pokedex = ({searchedPokemons, onInputChange, selectedPokemon, onPokemonClick, onCloseClick }: PokedexProps) => {

  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox onInputChange = {onInputChange}/>
        <Pokelist 
          searchedPokemons = {searchedPokemons}
          onPokemonClick = {onPokemonClick}
        />
      </div>
      <div className="pokeSearchresult-container">
        <PokeSearchResult 
          selectedPokemon = {selectedPokemon}
          onCloseClick = {onCloseClick}
        />
      </div>
    </div>
  )
};

export default Pokedex;