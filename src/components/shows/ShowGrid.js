/* eslint-disable array-callback-return */
/* eslint-disable react/function-component-definition */
import React from 'react';
import ShowCard from './ShowCard';
import NOT_FOUND_IMAGE from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          image={show.image ? show.image.medium : NOT_FOUND_IMAGE}
          name={show.name}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
