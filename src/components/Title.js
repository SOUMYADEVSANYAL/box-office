/* eslint-disable react/function-component-definition */
import React from 'react';

const Title = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default Title;
