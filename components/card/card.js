import React from 'react';
import styles from './card.module.css';

export default function Card({topImage, children}) {
    return (
        <div className={styles.card}>
            {topImage && <img src={topImage} alt="Top image" className={styles.topImage}/>}
            {children}
        </div>
    );
};
