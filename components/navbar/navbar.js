"use client";

import {useEffect, useState} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import items from "../../config/navbar.items.json";
import Footer from "./footer/footer";

export default function Navbar() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(window.innerWidth > 600);
    const [isToggleButtonVisible, setIsToggleButtonVisible] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            const isLargeScreen = window.innerWidth > 600;
            setIsNavbarVisible(isLargeScreen);
            setIsToggleButtonVisible(!isLargeScreen);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
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
                <img src={"/images/pabler.png"} alt={"Pabler"} className={styles.logo}/>
            </Link>
        );
    }

    return (
        <Link className={styles.navbarItem} href={href}>
            {children}
        </Link>
    );
}
