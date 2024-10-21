import styles from "./page.module.css";
import React from "react";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>HELLO WORLD!</h1>
            <p>Hello Stranger, I'm Flo, the creator of this website.</p>
            <p>Star me on <Link href={"https://github.com/Fl0exe"}>GitHub</Link> and check out my bio I guess</p>
            <Link href={"/bio"} className={styles.button}>Bio</Link>
        </main>
    );
}
