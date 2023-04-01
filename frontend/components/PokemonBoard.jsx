import Image from 'next/image';
import SliderCard from '@/components/SliderCard';
import { v4 as uuid } from 'uuid';

export default function PokemonBoard({ team, cardReference, teamId }) {

  return (
    <SliderCard>
      {team.map(pokemon => (
          <div tabIndex="0" key={uuid()} ref={cardReference} className="flex flex-col items-center">
              <p>Name: <strong>{pokemon.name}</strong></p>
              <p>Base Experience: <strong>{pokemon.base_experience}</strong></p>
              <Image
                src={pokemon.spriteImg}
                alt={pokemon.name}
                width={200}
                height={200}
              />
              <p>Abilities:</p>
              <strong>{pokemon.pokemonAbilities.join(', ')}</strong>
              <p>Types:</p>
            <strong>{pokemon.pokemonTypes.join(', ')}</strong>
          </div>
      ))}
    </SliderCard>
  )
}