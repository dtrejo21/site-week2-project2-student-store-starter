import * as React from "react"
import "./ShoppingCart.css"; 
//props: isOpen, products, shoppingCart

export default function ShoppingCart({isOpen, shoppingCart}){
    return(
        <div className={isOpen ? "shopping-cart": "shopping-cart hidden"}>
            <div className="header">
                <h3>Shopping Cart</h3>
            </div>
            <>
                <p>No itmes added to cart yet. Start shopping now!</p>
            </>

            {/*
            <div className="side-icons">
                <button i className="material-icons">add_shopping_cart</button>
            
                <div className="payment">
                <button i className="material-icons">monetization_on</button>
                </div>
                <div className="checkout">
                    <button i className="material-icons">fact_check</button>
                </div>
            </div>*/}

            <div className="notification">  </div>
        </div>
    );
}

