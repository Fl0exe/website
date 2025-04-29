"use client";

import {useEffect, useState} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import items from "../../config/navbar.items.json";
import Footer from "./footer/footer";
import Image from "next/image";

export default function Navbar() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isToggleButtonVisible, setIsToggleButtonVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setIsNavbarVisible(window.innerWidth > 600);
            setIsToggleButtonVisible(window.innerWidth <= 600);

            const handleResize = () => {
                setIsNavbarVisible(window.innerWidth > 600);
                setIsToggleButtonVisible(window.innerWidth <= 600);
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);


    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
    };

    return (
        <div>
            {isToggleButtonVisible && (
                <button
                    className={`button ${styles.navbarButton}`}
                    onClick={toggleNavbar}
                >
                    {isNavbarVisible ? "Close" : "Open"} Navbar
                </button>
            )}
            {isNavbarVisible && (
                <div className={`${styles.navbar} ${isToggleButtonVisible ? styles.floatingNavbar : ''}`}>
                    <div className={styles.navbarContainer}>
                        {items.map((item) => (
                            <NavbarItem key={item.name} href={item.path}>
                                {item.name}
                            </NavbarItem>
                        ))}
                    </div>
                    <Footer/>
                </div>
            )}
        </div>
    );
}

function NavbarItem({href, children}) {
    if (href === "/" && children === "Logo") {
        return (
            <Link href={href}>
                <div className={styles.logo}>
                    <Image src={"/images/pabler.png"} alt={"Pabler"} fill className={styles.logo}/>
                </div>
            </Link>
        );
    }

    return (
        <Link className={styles.navbarItem} href={href}>
            {children}
        </Link>
    );
}
