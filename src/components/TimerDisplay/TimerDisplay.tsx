import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';
// Styles
import styles from './TimerDisplay.module.css';
// Context
// import { GlobalContext } from '../../context/context';

const TimerDisplay: React.FC<TimerDisplayProps> = ({minutes, setMinutes, seconds, setSeconds, isRunning}) => {
    // const {
    //     minutes, increaseMinutes, decreaseMinutes,
    //     seconds, increaseSeconds, decreaseSeconds,
    //     isRunning,
    // } = useContext(GlobalContext);

    const increaseMinutes = () => setMinutes(prev => (prev < 59 ? (prev+1) : 0));
    const decreaseMinutes = () => setMinutes(prev => (prev > 0 ? (prev-1) : 59));
    const increaseSeconds = () => setSeconds(prev => {
        if (prev < 59)
            return (prev + 1)
        else {
            increaseMinutes();
            return 0;
        }
    })
    const decreaseSeconds = () => setSeconds(prev => {
        if (prev > 0)
            return (prev - 1)
        else {
            decreaseMinutes();
            return 59;
        }
    })
    return (
        <div className={styles.container}>
            <div className={styles.minutes}>
                <Button onClick={increaseMinutes} style={{ visibility: isRunning ? 'hidden' : 'visible' }}>
                    <FaCaretUp size="3rem"/>
                </Button>
                <Typography variant="h4" className={styles.time}>
                    {minutes < 10 ? '0'+minutes.toString() : minutes}
                </Typography>
                <Button onClick={decreaseMinutes} style={{ visibility: isRunning ? 'hidden' : 'visible' }}>
                    <FaCaretDown size="3rem"/>
                </Button>
            </div>

            <Typography variant="h4" className={styles.colon}>:</Typography>

            <div className={styles.seconds}>
                <Button onClick={increaseSeconds} style={{ visibility: isRunning ? 'hidden' : 'visible' }}>
                    <FaCaretUp size="3rem"/>
                </Button>
                <Typography variant="h4" className={styles.time}>
                    {seconds < 10 ? '0'+seconds.toString() : seconds}
                </Typography>
                <Button onClick={decreaseSeconds} style={{ visibility: isRunning ? 'hidden' : 'visible' }}>
                    <FaCaretDown size="3rem"/>
                </Button>
            </div>
        </div>
    )
}

export default TimerDisplay;
