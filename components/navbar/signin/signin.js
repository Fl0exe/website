"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Signin() {
  const { data: session } = useSession();

  return (
    <nav
      style={{
        padding: "1rem",
        borderBottom: "1px solid #ccc",
        marginBottom: "2rem",
      }}
    >
      <Link href="/short" style={{ marginRight: "1rem" }}>
        Dashboard
      </Link>
      {session ? (
        <>
          <span style={{ marginRight: "1rem" }}>
            Logged in as: {session.user.email}
          </span>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <>
          <Link href="/login" style={{ marginRight: "1rem" }}>
            Login
          </Link>
          <Link href="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
}
