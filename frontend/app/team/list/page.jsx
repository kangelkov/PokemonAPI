'use client'
import React, { useEffect, useState } from 'react';
import SliderCard from '@/components/SliderCard';
import TeamsListing, { UpperInfo } from '@/components/TeamsListing';
import { v4 as uuid } from 'uuid'

export default function Page() {
  const [teamList, setTeamList] = useState([]);
  const [filteredTeamList, setFilteredTeamList] = useState([]);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    setTeamList(JSON.parse(localStorage.getItem('pokemonTeams')))
  }, [])

  useEffect(() => {
    if(!teamList) return;
    const filteredTeams = teamList.filter(team => {
      return team.teamMembers.some(member => {
        return member.pokemonTypes.some(type => {
          return type.includes(filterText.toLowerCase());
        });
      });
    });
    setFilteredTeamList(filteredTeams);
  }, [filterText, teamList]);

  function handleFilterChange(e) {
    setFilterText(e.target.value);
  }

  const teamsToRender = filterText ? filteredTeamList : teamList;

  teamsToRender?.sort((a, b) => {
    return new Date(b.creationDate) - new Date(a.creationDate);
  });

  return (
    <section className="py-8 text-center">
      <p className="text-1xl pb-3">My teams:</p>
      <input type="text" placeholder="Filter by pokemon type" onChange={handleFilterChange}
             className="border border-gray-300 px-4 py-2 my-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {teamsToRender ? teamsToRender.map(team => (
        <React.Fragment key={uuid()}>
          <UpperInfo team={team} />
          <SliderCard >
            <TeamsListing team={team.teamMembers} />
          </SliderCard>
        </React.Fragment>
      )) :
        <p className="text-2xl">Create a team first!</p>}
    </section>
  );
}
