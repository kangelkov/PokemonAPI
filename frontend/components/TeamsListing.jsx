import Image from 'next/image';
import { v4 as uuid } from 'uuid';

export function UpperInfo({ team }) {
  const baseExpSum = team.teamMembers.reduce((acc, pokemon) => {
    // always convert to number before doing reduce!
    const baseExp = parseInt(pokemon.base_experience, 10);
    if (!isNaN(baseExp)) {
      return acc + baseExp;
    }

    return acc;
  }, 0);

  return (
    <div className="flex flex-row justify-between">
      <p className="text-2xl mb-2">Total base experience: {baseExpSum}</p>
      <p className="text-2xl mb-2">Team name: {team.name}</p>
    </div>
  )
}

export default function TeamsListing({ team }) {

  return (
    <>
      {team.map(pokemon => (
        <div tabIndex="0" key={uuid()} className="">
          <Image
            src={pokemon.spriteImg}
            alt={pokemon.name}
            width={200}
            height={200}
          />
          {
            pokemon.pokemonTypes.map(type => (
              <p key={uuid()}>{type}</p>
            ))
          }
        </div>
      ))}
      {/*<p>Consider adding some Pokémon to your team!</p>*/}
    </>
  )
}