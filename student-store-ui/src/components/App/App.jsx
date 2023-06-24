import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Footer from "../Footer/Footer"
//Renders Product Detail
//Not found

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
