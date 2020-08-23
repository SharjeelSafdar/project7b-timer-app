import React from 'react';
import { Typography, Button } from '@material-ui/core';
import logo from '../../images/logo.svg';
// Styles
import styles from './Header.module.css';
// Icons
import { GiRingingAlarm, GiTomato } from 'react-icons/gi';
import { FaHome, FaStopwatch } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={ styles.logoContainer}>
                <img src={logo} alt="logo" title="Timer App Logo" className={styles.logo} />
                <Typography variant="h3">Timer App</Typography>
            </div>
            <div>
                <Button variant="text" color="default" data-testid="homeLink">
                    <FaHome />
                    <span style={{ color: "#cc2c2c" }}>.</span>
                    Home
                </Button>
                <Button variant="text" color="default" data-testid="pomodoroLink">
                    <GiTomato />
                    <span style={{ color: "#cc2c2c" }}>.</span>
                    Pomodoro
                </Button>
                <Button variant="text" color="default" data-testid="timerLink">
                    <GiRingingAlarm />
                    <span style={{ color: "#cc2c2c" }}>.</span>
                    Timer
                </Button>
                <Button variant="text" color="default" data-testid="stopwatchLink">
                    <FaStopwatch />
                    <span style={{ color: "#cc2c2c" }}>.</span>
                    Stopwatch
                </Button>
            </div>
        </div>
    )
}

export default Header
