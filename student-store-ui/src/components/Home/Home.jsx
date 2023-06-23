import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import axios from "axios";
import { useState, useEffect } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Footer from "../Footer/Footer";

export default function Home(props) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");//like from lab
  const [searchInput, setSearchInput] = useState(""); //determine what user will see
  const [products, setProducts] = useState([]); //Cause its an array!

  useEffect(() => {
    const fetchProducts = async() =>{
      try{//basically from what we learned last week
        const url = "https://codepath-store-api.herokuapp.com/store"
        const response = await axios.get(url);
        const data = response.data;
        setProducts(data.products); //
      }
      catch(error){
        console.log("error");
      }
    }
    fetchProducts(); //we have to call the function for it to work
  }, []); //FIGURE OUT SEARCH

  return (
    <div className="home">
      {/*<Hero/> */}

      <div className="sub-navbar">
        <div className="content">
          <div className="row">
            <div className="searchbar">
              <input type="text" placeholder="Search"/>
              <button>Search</button>
            </div>
            <div cflassName="links">
              <span className="help"></span>
              <div className="cart"></div>
            </div>
          </div>

          <div className="row">
            <div className="hamburger-icon"></div>
            <ul className="categories-menu">
              <li className="is-active">
                <button>All Categories</button>
              </li>
              <li>
                <button>Clothing</button>
              </li>
              <li>
                <button>Food</button>
              </li>
              <li>
                <button>Accessories</button>
              </li>
              <li>
                <button>Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ProductGrid products={products} />

      <div className="about">
        <div className="content">
          <h3>About</h3>
          <div className="summary">
            <div className="text">
              <p>
                The codepath student store offers great products at great prices
                from a great team and a for a great cause.
              </p>
              <p>
                We've searched far and wide for items that pek the interests of
                even the most eccentric students and decided to offer them all here
                in one place.
              </p>
              <p>
                All proceeds go towards bringing high quality CS education to 
                college students around the country.
              </p>
            </div>
            <div className="logo">
              <img src="https://codepath-student-store-demo.surge.sh/assets/giant_codepath.6952ef57.svg" alt="codepath logo"></img>
            </div>
            </div>
        </div>
      </div>   

      <div className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <div className="summary">
            <ul className="info">
              <li>
                <span className="label">Email:</span>
                <span> code@path.org</span>
              </li>
              <li>
                <span className="label">Phone:</span>
                <span>1-800-CODEPATH</span>
              </li>
              <li>
                <span className="label"> Address: </span>
                <span>123 Fake Street, San Francisco, CA</span>
              </li>
              <li>
                <span>Socials:</span>
              </li>
            </ul>
            <div className="media">
              <img src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"></img>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
      
    </div>
  );
}