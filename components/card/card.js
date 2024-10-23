import React from 'react';
import styles from './card.module.css';
import Image from "next/image";

export default function Card({topImage, children}) {
    return (
        <div className={styles.card}>
            {topImage && <Image src={topImage} alt="Top image" className={styles.topImage} width={200} height={200}/>}
            {children}
        </div>
    );
};
