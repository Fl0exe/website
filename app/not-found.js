import styles from "./page.module.css";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>ERROR 404!</h1>
            <p>You must have taken a wrong turn there.</p>
            <p>You should go back home</p>
            <Link href={"/"} className={styles.button}>Go Home</Link>
        </main>
    );
}
