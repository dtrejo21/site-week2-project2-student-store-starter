import * as React from "react"
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <section className="sidebar">
      <button i className="material-icons">arrow_forward</button>
      
      <div className="side-icons">
        <div className="shopping-cart">
          <button i className="material-icons">add_shopping_cart</button>
        </div>
        <div className="payment">
          <button i className="material-icons">monetization_on</button>
        </div>
        <div className="checkout">
          <button i className="material-icons">fact_check</button>
        </div>
       
      </div>

    </section>
  )
}
