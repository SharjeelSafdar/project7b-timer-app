import React, { useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
// Styles
import styles from './PomodoroSetting.module.css';
// Context
import { GlobalContext } from '../../context/context';

const PomodoroSetting: React.FC<{}> = () => {
    const {
        pomoMin, increasePomoMin, decreasePomoMin,
        pomoSec, increasePomoSec, decreasePomoSec,
        breakMin, increaseBreakMin, decreaseBreakMin,
        breakSec, increaseBreakSec, decreaseBreakSec,
    } = useContext(GlobalContext);

    return (
        <div className={styles.container}>
            <div className={styles.pomodoroDuration}>
                <Typography variant="h4" className={styles.durationFor}>Pomodoro Duration</Typography>
                <div className={styles.minutes}>
                    <Button onClick={increasePomoMin}>
                        <FaCaretUp size="2rem"/>
                    </Button>
                    <Typography variant="h3">
                        {pomoMin < 10 ? '0'+pomoMin.toString() : pomoMin}
                    </Typography>
                    <Button onClick={decreasePomoMin}>
                        <FaCaretDown size="2rem"/>
                    </Button>
                </div>

                <Typography variant="h3" className={styles.colon}>:</Typography>

                <div className={styles.seconds}>
                    <Button onClick={increasePomoSec}>
                        <FaCaretUp size="2rem"/>
                    </Button>
                    <Typography variant="h3">
                        {pomoSec < 10 ? '0'+pomoSec.toString() : pomoSec}
                    </Typography>
                    <Button onClick={decreasePomoSec}>
                        <FaCaretDown size="2rem"/>
                    </Button>
                </div>
            </div>

            <div className={styles.breakDuration}>
                <Typography variant="h4" className={styles.durationFor}>Short Break Duration</Typography>
                <div className={styles.minutes}>
                    <Button onClick={increaseBreakMin}>
                        <FaCaretUp size="2rem"/>
                    </Button>
                    <Typography variant="h3">
                        {breakMin < 10 ? '0'+breakMin.toString() : breakMin}
                    </Typography>
                    <Button onClick={decreaseBreakMin}>
                        <FaCaretDown size="2rem"/>
                    </Button>
                </div>

                <Typography variant="h3" className={styles.colon}>:</Typography>

                <div className={styles.seconds}>
                    <Button onClick={increaseBreakSec}>
                        <FaCaretUp size="2rem"/>
                    </Button>
                    <Typography variant="h3">
                        {breakSec < 10 ? '0'+breakSec.toString() : breakSec}
                    </Typography>
                    <Button onClick={decreaseBreakSec}>
                        <FaCaretDown size="2rem"/>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PomodoroSetting;
