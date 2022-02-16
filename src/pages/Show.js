/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  //   https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast
  useEffect(() => {
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  console.log('show', show);
  return <div>This is the show page</div>;
};

export default Show;
