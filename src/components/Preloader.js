import React from 'react';
import styles from '../styles/Preloader.css';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.spinner}></div>
        </div>
    );
};

export default Preloader;
