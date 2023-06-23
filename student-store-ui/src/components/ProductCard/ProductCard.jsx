import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard(props){
    return(
        <div className="product-card">
            <div className="media">
                <Link to="/products/{props.product.id}">
                    <img src={props.product.image}></img>
                </Link>
            </div>
            <p className="product-name">{props.product.name}</p>
            <p className="product-price">${props.product.price.toFixed(2)}</p>
            
            {props.product.showDescription && (<p className="product-description">{props.product.description}</p>)}

        </div>

    );
}