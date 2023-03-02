import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { log } from "console";

const ProductItem = () => {
    const {
        query:{productId},
    } = useRouter();
    const [product, setProduct] = useState<TProduct>();

    useEffect(()=>{
        window.fetch(`/api/avo/${productId}`)
        .then(response => response.json())
        .then( avo  => setProduct(avo))
    })
    return (
        <div>
          <h1>{product?.name}</h1>
          <p>{product?.attributes.description}</p>
        </div>
    );
};

export default ProductItem;