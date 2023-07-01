import * as React from "react"
import "./ShoppingCart.css"; 

export default function ShoppingCart({isOpen, shoppingCart}){
    const isEmpty = Object.keys(shoppingCart).length === 0;
    let subtotal = 0.00;

    return(
        <div className={isOpen ? "shopping-cart": "shopping-cart hidden"}>
            <h3>Shopping Cart</h3>
            <p className={isEmpty ? "": "hidden"}>No items added to cart yet. Start shopping now!</p>
            <div className={isEmpty ? "hidden": "table-sections"}>
                <p>Name</p>
                <p>Quantity</p>
                <p>Unit Price</p>
                <p>Cost</p>
            </div>

            {
                Object.entries(shoppingCart).map( ([productName, productInfo]) => {
                    const price = productInfo.price.toFixed(2);
                    const quantity = productInfo.quantity;
                    const total = (price * quantity).toFixed(2);
                    subtotal += parseFloat(total);
                    return(
                        <div className="shopping-product" key={productName}>
                            <p>{productName}</p>
                            <p>{quantity}</p>
                            <p>{price}</p>
                            <p>${total}</p>
                        
                        </div>)
                })
            }
            <div className={isEmpty ? "hidden": "receipt"}>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Taxes and Fees: ${(subtotal * 0.0875).toFixed(2)} </p>
                <p>Total: ${(subtotal + (subtotal * 0.0875)).toFixed(2)}</p>
            </div>

            {/*
            <div Name="side-icons">
                <button i className="material-icons">add_shopping_cart</button>
            
                <div className="payment">
                <button i className="material-icons">monetization_on</button>
                </div>
                <div className="checkout">
                    <button i className="material-icons">fact_check</button>
                </div>
            </div>*/}

        </div>
    );
}

