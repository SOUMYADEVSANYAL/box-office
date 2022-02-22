/* eslint-disable react/function-component-definition */
import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subTitle="Are you looking for shows or actors."
      />
      <Navs />
      {children}
    </div>
  );
};

export default MainPageLayout;
