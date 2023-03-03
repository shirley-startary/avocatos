import React, { useEffect, useState } from "react";
import Card from "@components/Card/Card";

const HomePage = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(()=>{
        window.fetch('/api/avo')
        .then(response => response.json())
        .then(({ data }) => setProductList(data))
    }, [])

    return (
        <div>
            <h1>Mis Aguacates</h1>
            <section>
                {productList.map(product => 
                    <Card 
                        name={product.name}
                        key={`${product.id}`}
                        href={`/product/${product.id}`}
                    />
                )}
            </section>
        </div>
    )
}

export default HomePage;