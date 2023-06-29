import * as React from "react"
import "./Sidebar.css"
import { useState } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart";
//renders shoppingCart & checkoutForm

//accepts the following props: isOpen, shoppingCart, products, checkoutForm
  //handleOncheckoutFormChange, handleOnCheckoutForm,handleOnToggole
//render a button; called toggle-button, when button is clicked, should change
  //the [isOpen] prop by calling the handleOnToggle prop

export default function Sidebar({isOpen, handleOnToggle, shoppingCart}) {
  return (
    <section className={isOpen ? "sidebar open": "sidebar closed"}> 


      <button className="toggle-button" onClick={handleOnToggle}>
        <div i className="material-icons">arrow_forward</div>
      </button>

      <ShoppingCart isOpen={isOpen} 
                    shoppingCart={shoppingCart}/>
    </section>
  )
}
