"use client";

import Link from "next/link";
import styles from "./socials.module.css";
import items from "@/config/socials.json";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Footer() {
  return (
    <main className={styles.main}>
      {items.map((item) => (
        <SocialWrapper
          key={item.name}
          href={item.url}
          handle={item.handle}
          name={item.name}
        />
      ))}
    </main>
  );
}

function Social({ handle, name }) {
  const Icon = dynamic(
    () => import(`@/public/images/logos/${name.toLowerCase()}-logo.svg`),
  );

  return (
    <div className={styles.socialIconContainer}>
      <Icon className={styles.socialIcon} />
      {handle}
    </div>
  );
}

function SocialWrapper({ href, handle, name }) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    if (!copied)
      try {
        await navigator.clipboard.writeText(handle);
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      } catch (err) {
        console.error("failed to copy", err);
      }
  };

  if (href === "copy") {
    return (
      <div
        onClick={onCopy}
        className={"Link"}
        style={{ cursor: "pointer", position: "relative" }}
      >
        <Social name={name} handle={handle} />
        {copied && (
          <span
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              fontSize: "0.75rem",
            }}
          >
            copied!
          </span>
        )}
      </div>
    );
  }

  return (
    <Link href={href}>
      <Social name={name} handle={handle} />
    </Link>
  );
}
