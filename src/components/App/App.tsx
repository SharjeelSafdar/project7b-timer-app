import React from 'react';
// Components
import Header from '../Header/Header';
import Player from '../Player/Player';
import PomodoroSetting from '../PomodoroSetting/PomodoroSetting';
// Context
import { ContextProvider } from '../../context/context'
// Styles
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <ContextProvider>
        <Header />
        <div className={styles.padding}></div>
        <PomodoroSetting />
        <Player />
      </ContextProvider>
    </div>
  );
}

export default App;
