import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// Icons
import { FaGithub, FaPlay, FaPause } from 'react-icons/fa';
import { MdReplay } from 'react-icons/md';
// Context
import { GlobalContext } from '../../context/context';
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

const Player: React.FC<{}> = () => {
    const { isRunning, toggleIsRunning } = useContext(GlobalContext);
    const classes = useStyles();
    return (
        <div className={styles.container}>
            <Button className={classes.gitBtn} data-testid="gitBtn" title="Repository Link">
                <FaGithub />
            </Button>

            <Button
                onClick={toggleIsRunning}
                className={classes.playBtn} 
                data-testid="startStopBtn" 
                title={`${isRunning ? 'Stop' : 'Start'} Button`}
            >
                {isRunning ? <FaPause /> : <FaPlay />}
            </Button>

            <Button className={classes.resetBtn} data-testid="resetBtn" title="Reset Button">
                <MdReplay />
            </Button>
        </div>
    )
}

export default Player
