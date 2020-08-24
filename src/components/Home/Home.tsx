import React from 'react';
import { Typography, Button } from '@material-ui/core';
// Styles
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import styles from './Home.module.css';
const theme = createMuiTheme({
    palette: {
        primary: red,
    },
});

const Home = () => {
    return (
        <div className={styles.container}>
            <Typography variant="h2" color="textPrimary" className={styles.greeting}>
                Welcome
            </Typography>
            <Typography variant="h5" color="textPrimary" className={styles.action}>
                Select Timer Mode
            </Typography>
            <div className={styles.buttons}>
                <ThemeProvider theme={theme}>
                    <Button variant="outlined" color="primary" data-testid="pomoBtn" className={styles.button}>
                        Pomodoro
                    </Button>
                    <Button variant="outlined" color="primary" data-testid="timerBtn" className={styles.button}>
                        Timer
                    </Button>
                    <Button variant="outlined" color="primary" data-testid="stopwatchBtn" className={styles.button}>
                        Stop Watch
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Home
