/* eslint-disable react/function-component-definition */
import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subTitle }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </TitleWrapper>
  );
};

export default Title;
