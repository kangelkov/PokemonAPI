'use client'
import PokemonBoard from '@/components/PokemonBoard';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Link from 'next/link';

export default function Page() {
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    setTeamList(JSON.parse(localStorage.getItem('pokemonTeams')))
  }, [])

  return (
    <section className="py-8 text-center">
      <p className="text-1xl pb-3">My teams:</p>
      {teamList ? teamList.map(team => (
          <React.Fragment key={uuid()}>
            <p>{team.name}</p>
            <Link href={`/team/edit/${team.id}`} className="m-4">
              <PokemonBoard key={uuid()} team={team.teamMembers} teamId={team.id} />
            </Link>
          </React.Fragment>
        )) :
        <p className="text-2xl">Nothing to edit... yet!</p>
      }
    </section>
  );
}
