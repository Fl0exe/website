"use client";

import React, {useEffect, useRef, useState} from 'react';
import styles from './badge-wall.module.css';

export default function BadgeWall() {
    const [svgFiles, setSvgFiles] = useState([]);
    const containerRef = useRef(null);
    const badgeRefs = useRef([]);

    useEffect(() => {
        async function fetchSvgFiles() {
            const response = await fetch('/api/get-svg-files');
            const files = await response.json();
            setSvgFiles(files);
        }

        fetchSvgFiles();
    }, []);

    const handleMouseMove = (e) => {
        const container = containerRef.current;
        if (!container) return;
        const {left, top} = container.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        badgeRefs.current.forEach((badge) => {
            if (!badge) return;
            const rect = badge.getBoundingClientRect();
            const cx = rect.left + rect.width / 2 - left;
            const cy = rect.top + rect.height / 2 - top;
            const dx = x - cx;
            const dy = y - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 300;
            if (dist < maxDist) {
                // invert tilt direction
                const tiltX = -(dy / maxDist) * 15;
                const tiltY = (dx / maxDist) * 15;
                badge.style.transform = `perspective(500px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            } else {
                badge.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
            }
        });
    };

    const handleMouseLeave = () => {
        badgeRefs.current.forEach((badge) => {
            if (badge) badge.style.transform = 'perspective(500px) rotateX(0deg) rotateY(0deg)';
        });
    };

    return (
        <div
            ref={containerRef}
            className={styles.container}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {svgFiles.map((file, idx) => (
                <div
                    key={file}
                    className={styles.badge}
                    ref={(el) => (badgeRefs.current[idx] = el)}
                >
                    <img src={`/skill-badges/${file}`} alt={file}/>
                </div>
            ))}
        </div>
    );
}
