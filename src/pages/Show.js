/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //   https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast
  useEffect(() => {
    let isMounted = true;
    apiGet(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        setTimeout(() => {
          if (isMounted) {
            setShow(results);
            setIsLoading(false);
          }
        }, 2000);
      })
      .catch(err => {
        if (isMounted) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  console.log('show', show);

  if (isLoading) {
    return <div>Data is getting loaded.</div>;
  }

  if (error) {
    return <div>Error occured: {error}</div>;
  }

  return <div>This is the show page</div>;
};

export default Show;
