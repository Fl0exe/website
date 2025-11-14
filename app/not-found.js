import styles from "./not-found.module.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Page Not Found</p>
      <Link href={"/"} className={"button"}>
        Go Home
      </Link>
      <Image
        priority={true}
        className={styles.errorImage}
        src={"/images/error.png"}
        alt={"Error"}
        width={480}
        height={270}
      />
    </main>
  );
}
