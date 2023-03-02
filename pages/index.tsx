import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";

const HomePage = () => {
    const [productList, setProductList] = useState<TProduct[]>([]);

    useEffect(()=>{
        window.fetch('/api/avo')
        .then(response => response.json())
        .then(({ data }) => setProductList(data))
    }, [])

    return (
        <div>
            <Navbar/>
            <h1>Mis Aguacates</h1>
            <ul>
                {productList.map(product => <li key={`${product.id}`}><a href={`/product/${product.id}`}>{product.name}</a></li> )}
                
            </ul>
        </div>
    )
}

export default HomePage;