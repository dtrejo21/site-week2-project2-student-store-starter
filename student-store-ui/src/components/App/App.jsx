import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useState } from "react"

//handleOnToggle - func toggle open/closed state of sidebar
//handleAddItemToCart - func, accept 1 argue: productId, add it to [shoppingCart], set quantity to 1, add price to total
//handleRemoveItemFromCart - accept single: productId, decrease by 1, if new quantity is 0, remove from shopping car
//handleOnCheckoutFormChange - func, two argue: name & value, update the checkoutForm
//handleOnSubmitCheckoutForm - func, submit user's order to the API using the axios.post, lots of other stuff

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCar] = useState("");
  const [products, setProducts] = useState("");

  //Handle the toggle of the side bar's open/close state
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  }

  //handleAddItemToCart
  //handleRemoveItemFromCart
  //handleOnSubmitCheckoutForm

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar/>
          <Sidebar isOpen={isOpen} 
                   handleOnToggle={handleOnToggle}
                   shoppingCart={shoppingCart}/>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>

          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
