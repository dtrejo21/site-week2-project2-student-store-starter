import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({product}){
    return(
        <div className="product-card">
            <div className="media">
                <Link key={product.name} to={`/product/${product.id}`}>
                    <img src={product.image}></img>
                </Link>
            </div>
            <p className="product-name">{product.name}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
        </div>

    );
}