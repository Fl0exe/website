'use client'

import React, {useEffect, useState} from 'react';
import styles from './badge-carousel.module.css';

export default function BadgeCarousel() {
    const [svgFiles, setSvgFiles] = useState([]);

    useEffect(() => {
        async function fetchSvgFiles() {
            const response = await fetch('/api/get-svg-files');
            const files = await response.json();
            setSvgFiles(files);
        }

        fetchSvgFiles().then(r => r);
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const carouselRow = (direction, keyPrefix) => (
        <div className={`${styles.carouselRow} ${styles[direction]} ${isHovered ? styles.paused : ''}`}>
            {svgFiles.concat(svgFiles).map((file, index) => (
                <img
                    key={`${keyPrefix}-${index}`}
                    src={`/skill-badges/${file}`}
                    alt={`Badge ${index + 1}`}
                    className={styles.badge}
                />
            ))}
        </div>
    );

    return (
        <div className={styles.carouselContainerContainer}>

            <div
                className={styles.carouselContainer}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={styles.rowContainer}>
                    {carouselRow('left', 'first')}
                    {carouselRow('left', 'second')}
                </div>
            </div>
        </div>
    );
}
