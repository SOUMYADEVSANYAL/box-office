/* eslint-disable react/function-component-definition */
import React from 'react';
import ActorsCard from './ActorsCard';
import NOT_FOUND_IMAGE from '../../images/not-found.png';

const ActorsGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorsCard
          key={person.id}
          image={person.image ? person.image.medium : NOT_FOUND_IMAGE}
          name={person.name}
          gender={person.gender}
          country={person.country ? person.deathday : null}
          birthday={person.birthday}
          deathday={person.deathday ? person.deathday : null}
        />
      ))}
    </div>
  );
};

export default ActorsGrid;
