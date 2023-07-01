import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"
import { useState, useEffect} from "react"
import axios from "axios"

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCart, setShoppingCart] = useState({});
  const [checkoutForm, setCheckoutForm] = useState({
    "name": "",
    "email": "", 
    "shoppingCart": {}
  });
  const [newOrder, setNewOrder] = useState({});

  //Handle the toggle of the side bar's open/close state
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  }

  //Don't forget that shoppingCart is an array of obj.s
  const handleAddItemToCart = (product) =>{
    const productName = product.name;
    const productPrice = product.price;
    if(productName in shoppingCart)
    {
      const updatedShoppingCart = {...shoppingCart, [productName]: {price: productPrice, quantity: shoppingCart[productName].quantity + 1}}
      setShoppingCart(updatedShoppingCart);
    }
    else
    {
      const updatedShoppingCart = {...shoppingCart, [productName]: {price: productPrice, quantity: 1}}
      setShoppingCart(updatedShoppingCart);
    }

  }
  const handleRemoveItemFromCart = (product) => {
    const productName = product.name;
    const productPrice = product.price;
    if(productName in shoppingCart)
    {
      if(shoppingCart[productName].quantity === 1)
      {//delete the shopping cart altogether
        const updatedShoppingCart = {...shoppingCart}
        delete shoppingCart[productName]
        setShoppingCart(updatedShoppingCart);
      }
      else
      {
        const updatedShoppingCart = {...shoppingCart, [productName]: {price: productPrice, quantity: shoppingCart[productName].quantity - 1}}
        setShoppingCart(updatedShoppingCart);
      }
    }
  }


  function handleOnCheckoutFormChange(name, value){
    let newCheckoutForm = {...checkoutForm};
    newCheckoutForm[name] = value;
    setCheckoutForm(newCheckoutForm);
  }

  function resetShopCart(){
    setCheckoutForm({
      "name": "",
      "email": "",
      "shoppingCart": {}
    });
    setShoppingCart({});
  }

  async function handleOnSubmitCheckoutForm(){
    const currentShopCart = {...shoppingCart};
    checkoutForm["shoppingCart"] = currentShopCart;
    const currentCheckoutForm = {...checkoutForm};

    try{
      const response = await axios.post("http://localhost:3001", currentCheckoutForm);

    }catch(error){

    }
    setNewOrder(currentCheckoutForm);
    resetShopCart();
  }


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar/>
          <Sidebar isOpen={isOpen} 
                   handleOnToggle={handleOnToggle}
                   shoppingCart={shoppingCart}
                   checkoutForm={checkoutForm}
                   handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                   newOrder={newOrder}/>

          <Routes>
            <Route path="/" element={<Home handleAddItemToCart={handleAddItemToCart}
                                           handleRemoveItemFromCart={handleRemoveItemFromCart}
                                           shoppingCart={shoppingCart}
                                           />}></Route>
            <Route path="/product/:id" element={<ProductDetail/>}></Route>
          </Routes>

          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
