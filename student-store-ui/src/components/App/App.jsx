import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"

import Footer from "../Footer/Footer"
import ProductGrid from "../ProductGrid/ProductGrid"
import ProductCard from "../ProductCard/ProductCard"
import SubNavBar from "../SubNavBar/SubNavBar"


export default function App() {

  return (

    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar/>
          <Sidebar/>
          <Home/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
