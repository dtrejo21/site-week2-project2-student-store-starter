import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"

export default function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar/>
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>

          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
