import { PokemonSchema } from '../types/PokemonSchema';
import './PokeSearchResult.css'

interface PokeSearchResultProps {
    selectedPokemon: PokemonSchema | undefined;
    onCloseClick: () => void; 
}

const PokeSearchResult = ({selectedPokemon, onCloseClick} : PokeSearchResultProps) => {

    const {name, id, height, weight, base_experience, sprites} = selectedPokemon || {};

    return (
        <div className="poke-result-card">
            {
                selectedPokemon ? 
                (
                    <div>
                        <div className='close-button'>
                            <button onClick={() => onCloseClick()}>Close</button>
                        </div>
                        <div>
                            <img 
                                className='pokemon-animated-sprite'
                                src={sprites?.animated || sprites?.normal} 
                                alt="pokemon" 
                            />
                            <p>Name: {name}</p>
                            <p>Id: {id}</p>
                            <p>Height: {height}</p>
                            <p>Weight: {weight}</p>
                            <p>Base Exp: {base_experience}</p>
                        </div>
                    </div>
                ) : (
                    <h2>
                        Welcome to the Pokedex
                    </h2>
                )
            }
        </div>
    )
}

export default PokeSearchResult;