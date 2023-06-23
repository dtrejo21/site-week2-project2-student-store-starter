import * as React from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="content">
        <Logo/>
        <div className="social"> </div>
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#About">About Us</Link>
          </li>
          <li>
            <Link to="/#Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/#Buy">Buy Now</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
