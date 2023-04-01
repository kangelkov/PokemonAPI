import fetch from 'node-fetch';

const createTeam = async (req, res) => {
    try {
        const queryLimit = 1000;
        const pokemonsArray = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${queryLimit}`);
        const { results } = await pokemonsArray.json();

        const randomIndex = Math.floor(Math.random() * results.length);
        const randomPokemon = results[randomIndex];

        const pokemonData = await fetch(randomPokemon.url);
        const pokemonDetails = await pokemonData.json();

        const { name, base_experience } = pokemonDetails;
        const spriteImg = pokemonDetails.sprites.other['official-artwork'].front_default
        const pokemonAbilities = pokemonDetails.abilities.map(ability => ability.ability.name)
        const pokemonTypes = pokemonDetails.types.map(type => type.type.name)

        res.status(200).json({
            name, base_experience, spriteImg, pokemonAbilities, pokemonTypes
        })
    } catch (error) {
        console.log('Error:', error.message)
        res.status(500).json({ message: error.message })
    }
}

export default { createTeam }