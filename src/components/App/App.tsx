import React from 'react';
// Components
import Header from '../Header/Header';
import Player from '../Player/Player';
// Styles
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Player />
    </div>
  );
}

export default App;
