import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

//This is an example of how to use useState and useEffect on a callback to the pokeAPI.

const FetchingInput = () => {
    const [filter, setFilter] = useState('charmander');
    const [debouncedFilter] = useDebounce(filter, 700) //This will check 'filter' every 0,7 seconds. If its value has changed, then 
                                                        //debouncedFilter will change too (executing useEffect function and calling API with filter value)
    const [pokemon, setPokemon] = useState([]);

    useEffect(() =>{
        const getFilteredPokemon = async () =>{
            const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${filter}`);
            const json = await pokemon.json();
            return{
                ...json,
                name: json.name,
                id: json.id,
                image: json.sprites.front_shiny,
            }    
        }
        getFilteredPokemon().then((element) =>setPokemon([element]))
    }, [debouncedFilter])

  return ( //Returns: input box for searching a pokemon, and rendered pokemon name and image
    <div>
        <input 
            type="text" 
            value={filter} 
            onChange ={(e) => setFilter(e.target.value)}
        />
        <div>
            {
                pokemon.map((p) => (
                    <div key={p.id}>
                        <h1>{p.name}</h1>
                        <img src={p.image} alt={p.name}/>
                    </div> 
                ))
            }
        </div>
    </div>
  )
}

export default FetchingInput