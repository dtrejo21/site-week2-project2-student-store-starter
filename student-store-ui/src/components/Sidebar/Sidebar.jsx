import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Sidebar({isOpen, handleOnToggle, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, newOrder}) {
  return (
    <section className={isOpen ? "sidebar open": "sidebar closed"}> 
      <button className="toggle-button" onClick={handleOnToggle}>
        <i className="material-icons">arrow_forward</i>
        
      </button>

      <ShoppingCart isOpen={isOpen} 
                    shoppingCart={shoppingCart}/>

      <CheckoutForm isOpen={isOpen}
                    shoppingCart={shoppingCart}
                    checkoutForm={checkoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    newOrder={newOrder}/>
    </section>
  )
}
