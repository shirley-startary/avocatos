import React from 'react'
import Link from 'next/link'
import styles from "./Footer.module.css";

const Footer = () => (

    <footer className={styles.footer}>
        <div className={styles.group1}>
            <div className={styles.box}>
                <h3>Nosotros</h3>
                <Link href="/about">
                    Conoce más
                </Link>
            </div>
            <div className={styles.box}>
                <h3>Servicios</h3>
                <Link href="/">
                Todos los productos

                </Link>
            </div>
            <div className={styles.box}>
                <h3>Realizado por </h3>                
                <p></p>
                <Link href="/">
                Shirley Suarez
                </Link>
                
            </div>
            <div className={styles.box}>
                <h3>Hecho como</h3>
                <p>ejercicio del curso de</p>
                <Link href="/">
                    Platzi y su curso de Next.JS
                </Link>
            </div>
       
        </div>
        <div className={styles.group2}> 
        
            <small>&copy; 2023 <b>Shirley</b> - Todos los Derechos Reservados.</small>
            <small>Icons made by Freepik from www.flaticon.com - Avocado images taken from Avocado 101 at California Avocado</small>
        </div>
    </footer>
)

export default Footer