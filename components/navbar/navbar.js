import styles from "./navbar.module.css";
import Link from "next/link";
import items from "./navbar.items.json";

export default function Navbar() {
    return (
        <main className={styles.main}>
            {items.map((item) => (
                <NavbarItem key={item.name} href={item.path}>
                    {item.name}
                </NavbarItem>
            ))}
        </main>
    );
}

function NavbarItem({href, children}) {
    if (href === "/" && children === "Logo") {
        return (
            <Link href={href}>
                <img src={"/images/pabler.svg"} alt={"Pabler"} className={styles.logo}/>
            </Link>
        );
    }

    return (
        <Link href={href}>
            {children}
        </Link>
    );
}
