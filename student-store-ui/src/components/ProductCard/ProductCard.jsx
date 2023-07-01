import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({products, showDescription ,handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}){
    const productName = products.name;
    
    let productQuantity;
    if(shoppingCart && shoppingCart[productName]){
        productQuantity = shoppingCart[productName].quantity;
    }
    return(
        <div className="product-card">
            <div className="media">
                <Link key={products.name} to={`/product/${products.id}`}>
                    <img src={products.image} atl={products.name}></img>
                </Link>
            </div>
            <div className="main-info">
                <p className="product-name">{products.name}</p>
                <p className="product-price">${products.price.toFixed(2)}</p>
                {productQuantity && <p className="productQuantity">{productQuantity}</p>}
            </div>

            <div className="actions">
                <button className="add" onClick={() => handleAddItemToCart(products)}>
                    <i className="material-icons">add</i>
                </button>
                <button className="remove" onClick={() => handleRemoveItemFromCart(products)}>
                    <i className="material-icons">remove</i>
                </button>
            </div>
            
        </div>

    );
}