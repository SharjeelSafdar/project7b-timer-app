import React from 'react';
import { Typography } from '@material-ui/core';
import logo from '../../images/logo.svg';
// Styles
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <img src={logo} alt="logo" title="Timer App Logo" className={styles.logo} />
            <Typography variant="h1" className={styles.title}>Timer App</Typography>
        </div>
    )
}

export default Header
