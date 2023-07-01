import * as React from "react"
import "./CheckoutForm.css"; 

export default function checkoutForm({isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, newOrder}){
    let subtotal = 0.00;

    return(
        <div className={isOpen ? "checkout-form": "hidden"}>
            <div className="checkout-form-input">
                <p>Name</p>
                <input className="input-field"
                   type="text"
                   name="name"
                   placeholder="Student Name"
                   value={checkoutForm.name}
                   onChange={(e) => handleOnCheckoutFormChange(e.target.name, e.target.value)}
                />
                <p>Email</p>
                <input className="input-field"
                   type="email"
                   name="email"
                   placeholder="student@codepath.org"
                   value={checkoutForm.email}
                   onChange={(e) => handleOnCheckoutFormChange(e.target.name, e.target.value)}
                />
            </div>

            <div className="checkout">
                <button className="checkout-button" onClick={(e) => handleOnSubmitCheckoutForm()}>
                    Checkout
                </button>
            </div>
            {
                Object.keys(newOrder).length > 0 &&
                <div className="recipt"> 
                    <p className="recipt-name">Receipt</p>
                    <p>Showing recipt for {newOrder.name} avilable at {newOrder.email}:</p>
                    {Object.entries(newOrder.shoppingCart).map(([productName, productInfo]) => {
                        const price = productInfo.price.toFixed(2);
                        const quantity = productInfo.quantity;
                        const total = (price * quantity).toFixed(2);
                        subtotal += parseFloat(total);
                        return(
                            <li key={productName}> {quantity} total {productName} purchased at a cost of ${price} for a total cost of ${total}.</li>
                        )
                    })}
                    <li>Before taxes, the subtotal was ${subtotal.toFixed(2)}.</li>
                    <li>After taxes and fees were applied, the total comes out to ${(subtotal + (subtotal * 0.0875)).toFixed(2)}.</li>
                
                </div>
            }



            
        </div>
    );
}