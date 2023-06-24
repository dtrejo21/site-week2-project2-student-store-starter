import * as React from "react"
import "./Home.css"; 
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero"
import axios from "axios";
import { useState, useEffect } from "react";
import SubNavBar from "../SubNavBar/SubNavBar";

export default function Home(props) {
  const [selectedCategory, setSelectedCategory] = useState("all Categories");//like from lab
  const [searchInput, setSearchInput] = useState(""); //determine what user will see, keeps updating
  const [products, setProducts] = useState([]); //Cause its an array!

  useEffect(() => {
    const fetchProducts = async() =>{
      try{//basically from what we learned last week
        const url = "https://codepath-store-api.herokuapp.com/store"
        const response = await axios.get(url);
        const data = response.data;
        setProducts(data.products); 
      }
      catch(error){
        console.log("error");
      }
    }
    fetchProducts();
  }, []); 

  return (
    <div className="home">

      <Hero/>
      
      <SubNavBar setSelectedCategory={setSelectedCategory} searchInput={searchInput} setSearchInput={setSearchInput}/>
      <ProductGrid products = {products} selectedCategory={selectedCategory} searchInput={searchInput}/>

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
    </div>
  );
}