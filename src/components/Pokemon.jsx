import React, { useState, useEffect } from 'react'

const Pokemon = () => {
    const [pokemon, setPokemon] = useState(0)


    useEffect(() => {
        console.log('Were in')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(res => res.json())
            .then(res => {
                setPokemon({
                    details: res.results
                })
            })
            console.log(pokemon)
    }, [])
    return (
        <div>
            {pokemon.details ? pokemon.details.map((pokemon) => {
                return <li>{pokemon.name}</li>
            }) : null}
        </div>
    )
}

export default Pokemon