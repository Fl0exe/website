"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Signin() {
  const { data: session } = useSession();

  return (
    <div className={styles.navbarContainer}>
      {session ? (
        <>
          <Link href="/short">
            <span>{session.user.email}</span>
          </Link>
          <a onClick={() => signOut()}>Sign Out</a>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
