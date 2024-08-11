import styles from "./page.module.css";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
            <h2>HELLO WORLD!</h2>
            <p>Hello Stranger, I'm Flo, the creator of this website.</p>
            <p>Star me on GitHub or check out my bio i guess</p>
            <Link href={"/bio"} className={styles.button}>Bio</Link>
    </main>
  );
}
