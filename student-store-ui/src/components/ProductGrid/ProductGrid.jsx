import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";


export default function ProductGrid({products}){
    return(/*Accepts the following props: products*/
    <>
        <h2>Best Selling Products</h2>
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard 
                    key={product.id}
                    product={product}
                    showDescription={false}/>
                )
            )}
        </div>
    </>
    );
}
