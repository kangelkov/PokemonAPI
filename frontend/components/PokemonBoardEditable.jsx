import React, { useCallback, useRef, useState } from 'react';
import SliderCard from '@/components/SliderCard';
import { v4 as uuid } from 'uuid';

export default function PokemonBoardEditable({ team, onSave = (updatedTeam) => {} }) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  const abilityRefs = useRef(team.map(() => React.createRef()));
  const typeRefs = useRef(team.map(() => React.createRef()));

  const handleInputChange = useCallback((event, index, field) => {
    const newValue = event.target.value;
    const updatedTeam = [...team];
    updatedTeam[index][field] = newValue;
    onSave(updatedTeam);
  }, [team, onSave]);

  const handlePush = (index, field) => {
    const updatedTeam = [...team];
    const newFieldValue = field === 'pokemonAbilities' ? abilityRefs.current[index].current.value : typeRefs.current[index].current.value;
    updatedTeam[index][field].push(newFieldValue);
    onSave(updatedTeam);
    forceUpdate();
  };

  return (
    <>
      <SliderCard>
        {team.map((pokemon, index) => (
          <div tabIndex="0" key={uuid()} className="flex flex-col items-center mx-4">
            <p>Name: <strong>{pokemon.name}</strong></p>
            <input
              type="text"
              placeholder="Edit name"
              className="my-2 p-2"
              onChange={(event) => handleInputChange(event, index, 'name')}
            />
            <p>Base Experience: <strong>{pokemon.base_experience}</strong></p>
            <input
              type="number"
              placeholder="Edit base experience"
              className="my-2 p-2"
              onChange={(event) => handleInputChange(event, index, 'base_experience')}
            />
            <p>Abilities:</p>
            <strong>{pokemon.pokemonAbilities.join(', ')}</strong>
            <input key={uuid()} type="text" placeholder="Add" ref={abilityRefs.current[index]} className="my-2 p-2"/>
            <button className="button button-zinc my-2" onClick={() => handlePush(index, 'pokemonAbilities')}>Push ability</button>
            <p>Types:</p>
            <strong>{pokemon.pokemonTypes.join(', ')}</strong>
            <input key={uuid()} type="text" placeholder="Add" ref={typeRefs.current[index]} className="my-2 p-2"/>
            <button className="button button-zinc my-2" onClick={() => handlePush(index, 'pokemonTypes')}>Push type</button>
          </div>
        ))}
      </SliderCard>
    </>
  );
}