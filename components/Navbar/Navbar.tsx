import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <h2 className={styles.h2}>Kawai<span className={styles.span}>Avocatos</span></h2>
            <menu>
                <Link href="/" className={styles.a}>
                    Home
                </Link>
                <Link href="/about" className={styles.a}>
                    About
                </Link>
            </menu>
        </nav>
    );
};

export default Navbar;