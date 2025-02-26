import PokeCard from "../PokeCard/PokeCard";
import { PokemonSchema } from "../types/PokemonSchema";
import "./Pokelist.css"

interface PokelistProps{
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void; 
}

const Pokelist = ({searchedPokemons, onPokemonClick}: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon) => {
                    return (
                        pokemon.name &&  (
                            <PokeCard 
                                key={pokemon.id}
                                name={pokemon.name}
                                spriteUrl={pokemon.sprites.normal}
                                onPokemonClick={onPokemonClick}
                            />
                        )
                    )
                })
            }
        </div>
    )
}

export default Pokelist;