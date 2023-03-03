import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <figure>
                <img src="images/avocato1.png" alt="aguacate" />
            </figure>
            <div className={styles.contenido}>
                <h3>{props.name}</h3>
                <p>Descripcion</p>
                <Link href={props.href}>Detalle</Link>
            </div>
        </div>
    );
};

export default Card;