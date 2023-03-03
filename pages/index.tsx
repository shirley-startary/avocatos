import React, { useEffect, useState } from "react";
import Card from "@components/Card/Card";
import styles from './index.module.css';

const HomePage = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);
    
    useEffect(()=>{
        window.fetch('/api/avo')
        .then(response => response.json())
        .then(({ data }) => setProductList(data))
    }, [])

    return (
        <div className={styles.container}>
            <h1>Mis Aguacates</h1>
            <section className={styles.containerCard}>
                {productList.map(product => 
                    <Card 
                        name={product.name}
                        key={`${product.id}`}
                        price={product.price}
                        href={`/product/${product.id}`}
                        img={product.image}
                    />
                )}
            </section>
        </div>
    )
}

export default HomePage;