import React from 'react';
import styles from './card.module.css';
import Image from "next/image";

export default function Card({mode, topImage, children}) {
    const cardStyle = {
        expand: styles.cardExpand,
        center: styles.cardCenter,
    }[mode] || styles.cardDefault;

    return (
        <div className={cardStyle}>
            {topImage && (
                <Image
                    src={topImage}
                    alt="Top image"
                    className={styles.topImage}
                    width={200}
                    height={200}
                />
            )}
            {children}
        </div>
    );
}
