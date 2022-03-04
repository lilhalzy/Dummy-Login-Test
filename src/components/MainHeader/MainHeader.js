import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>Dummy Login Test</h1>
      <p>by lilhalzy</p>
      <Navigation onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
