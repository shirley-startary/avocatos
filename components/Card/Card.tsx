import React from "react";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <figure className={styles.imageContainer}>
                <img src={props.img} alt="aguacate" />
            </figure>
            <div className={styles.contenido}>
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <Link href={props.href}>Detalle</Link>
            </div>
        </div>
    );
};

export default Card;