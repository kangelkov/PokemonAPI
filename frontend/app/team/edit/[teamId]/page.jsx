'use client'
import React, { useEffect, useState } from 'react';
import PokemonBoardEditable from '@/components/PokemonBoardEditable';
import { v4 as uuid } from 'uuid';

export default function Page({ params }) {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    setTeamList(JSON.parse(localStorage.getItem('pokemonTeams')))
  }, [])

  const team = teamList.find(team => team.id === params.teamId)

  const handleSavePokemon = (updatedTeam) => {
    const updatedTeamList = [...teamList];
    const updatedTeamIndex = updatedTeamList.findIndex(team => team.id === params.teamId);
    updatedTeamList[updatedTeamIndex].teamMembers = updatedTeam;
    localStorage.setItem('pokemonTeams', JSON.stringify(updatedTeamList));
  }

  return (
    <>
      <p>Edit careful</p>
      {
        team &&
        <React.Fragment key={uuid()}>
          <p>{team.name}</p>
          ID: {params.teamId}
          <PokemonBoardEditable team={team.teamMembers} onSave={(updatedTeam) => handleSavePokemon(updatedTeam)}/>
        </React.Fragment>
      }
    </>
  )
}