import styles from "./not-found.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.errcode}>404</h1>
            <p className={styles.errmessage}>Page Not Found</p>
            <Link href={"/"} className={"button"}>Go Home</Link>
            <Image priority={true} className={styles.errimage} src={"/images/error.png"} alt={"Error"} width={1600}
                   height={900}/>
        </main>
    );
}
