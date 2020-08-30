import React, { useRef } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import { FaGithub, FaPlay, FaPause } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';
// Styles
import styles from './Player.module.css';

const useStyles = makeStyles({
    playBtn: {
        background: '#00648e',
        padding: '25px 5px',
        borderRadius: '50%',
        color: '#fff',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
        transition: 'all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': {
            background: '#003a60'
        }
    },
    gitBtn: {
        fontSize: 25
    },
    resetBtn: {
        fontSize: 25
    }
});

const Player: React.FC<PlayerProps> = ({
    minutes, seconds, isRunning, setIsRunning, setSeconds, setMinutes}) => {
    let secondsLeft = useRef<number>(0);
    let intervalId = useRef<NodeJS.Timeout | null>(null);
    const classes = useStyles();
    secondsLeft.current = minutes*60 + seconds;

    const startTimer = () => {
        if (isRunning || secondsLeft.current <= 0)
            return null;
        
        setIsRunning(true);
        intervalId.current = setInterval(() => {
            if (secondsLeft.current > 1) {
                setSeconds(prev => {
                    if (prev > 0)
                        return (prev - 1)
                    else {
                        setMinutes(prev => ((prev>0) ? (prev-1) : 0));
                        return 59;
                    }
                })
            }
            else {
                if (intervalId.current !== null) {
                    clearInterval(intervalId.current)
                    intervalId.current = null;
                }
                setSeconds(0);
                setIsRunning(false);
            }
        }, 1000)
    }
    const stopTimer = () => {
        if (isRunning && intervalId.current !== null) {
            clearInterval(intervalId.current);
            intervalId.current = null;
            setIsRunning(false);
        }
    }
    const resetTimer = () => {
        setIsRunning(false);
        setMinutes(0);
        setSeconds(0);
        if (intervalId.current !== null) {
            clearInterval(intervalId.current);
            intervalId.current = null;
        }
    }

    return (
        <div className={styles.container}>
            <a
                href="https://github.com/SharjeelSafdar/project7b-timer-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button className={classes.gitBtn} data-testid="gitBtn" title="Repository Link">
                    <FaGithub />
                </Button>
            </a>

            <Button
                onClick={isRunning ? stopTimer : startTimer}
                className={classes.playBtn} 
                data-testid="startStopBtn" 
                title={`${isRunning ? 'Stop' : 'Start'} Button`}
            >
                {isRunning ? <FaPause /> : <FaPlay />}
            </Button>

            <Button 
                onClick={resetTimer}
                className={classes.resetBtn} 
                data-testid="resetBtn" 
                title="Reset Timer"
            >
                <MdReplay />
            </Button>
        </div>
    )
}

export default Player
