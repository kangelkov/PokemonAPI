'use client'
import getRandomPokemon from '@/lib/getRandomPokemon';
import { useState, useEffect, useRef } from 'react';
import PokemonBoard from '@/components/PokemonBoard';
import { v4 as uuid } from 'uuid';

export default function Page() {
    const [team, setTeam] = useState([]);
    const [teamName, setTeamName] = useState('');
    const cardReference = useRef(null);

    useEffect(() => {
        cardReference.current?.scrollIntoView()
    }, [team])

    const addPokemon = async () => {
        const randomPokemon = await getRandomPokemon();
        setTeam([...team, randomPokemon]);
    };

    const handleTeamNameChange = (e) => setTeamName(e.target.value);

    const handleSubmitTeam = (e) => {
      e.preventDefault();
      const pokemonsTeam = {
        id: uuid(),
        name: teamName,
        teamMembers: team,
        creationDate: new Date()
      }
      const previousTeams = localStorage.getItem('pokemonTeams')

      if(previousTeams) {
        const teams = JSON.parse(previousTeams);
        teams.push(pokemonsTeam);
        localStorage.setItem('pokemonTeams', JSON.stringify(teams));
      } else {
        localStorage.setItem('pokemonTeams', JSON.stringify([pokemonsTeam]));
      }
      alert('Team created successfully!')
      setTeam([])
      setTeamName('')
    }

    return (
      <section className="py-8 text-center">
          <p className="text-1xl">Team name:</p>
          <input type="text" onChange={(e) => handleTeamNameChange(e)} value={teamName} className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none" />
          <br />
          <button onClick={() => addPokemon()} className="button button-gray m-5">Gotta Catch Em All</button>
        <p className="text-2xl mb-2">{teamName}</p>
        <PokemonBoard team={team} cardReference={cardReference} />
          <button onClick={(e) => handleSubmitTeam(e)} className="button button-green m-5">Create a team</button>
      </section>
    );
}