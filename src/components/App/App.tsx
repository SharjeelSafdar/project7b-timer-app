import React from 'react';
// Components
import Header from '../Header/Header';
import Player from '../Player/Player';
import Home from '../Home/Home';
// Styles
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Home />
      <Player />
    </div>
  );
}

export default App;
