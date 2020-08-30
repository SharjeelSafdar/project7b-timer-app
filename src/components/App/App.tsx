import React, { useState } from 'react';
// Components
import Header from '../Header/Header';
import Player from '../Player/Player';
import TimerDisplay from '../TimerDisplay/TimerDisplay';
// Styles
import styles from './App.module.css';

const App = () => {
  const [ seconds, setSeconds ] = useState<number>(0);
  const [ minutes, setMinutes ] = useState<number>(0);
  const [ isRunning, setIsRunning ] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.padding}></div>
      <TimerDisplay 
        minutes={minutes}
        setMinutes={setMinutes}
        seconds={seconds}
        setSeconds={setSeconds}
        isRunning={isRunning}
      />
      <Player 
        minutes={minutes}
        seconds={seconds}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setSeconds={setSeconds}
        setMinutes={setMinutes}
      />
    </div>
  );
}

export default App;
