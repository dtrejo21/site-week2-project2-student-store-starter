import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import axios from "axios";
import { useState, useEffect } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

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

      <footer className="footer">
        <div className="content">
          <div className="top">
            <div className="links">
              <div className="links-col">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
                  <li>Clothing</li>
                  <li>Food</li>
                  <li>Accessories</li>
                  <li>Tech</li>
                </ul>
              </div>
              <div className="links-col">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div className="links-col">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                </ul>
              </div>
              <div className="links-col">
                <h4>Account</h4>
                <ul>
                  <li>Login</li>
                  <li>Register</li>
                  <li>Account Setting</li>
                  <li>My Orders</li>
                </ul>
              </div>
              <div className="links-col">
                <h4>Socials</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>YouTube</li>
                </ul>
              </div>
              <div className="links-col">
                <h4>Our App</h4>
                <ul>
                  <li>
                    <img src="https://codepath-student-store-demo.surge.sh/assets/app_store.a7d8c549.svg" alt="apple store"></img>
                  </li>
                  <li>
                    <img src="https://codepath-student-store-demo.surge.sh/assets/google_play.27aab7c8.svg" alt="google play"></img>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom">
            <span>
              <img src="https://codepath-student-store-demo.surge.sh/assets/american_express.40f242c7.svg" alt="american express"></img>
              <img src="https://codepath-student-store-demo.surge.sh/assets/mastercard.c75b7bc4.svg" alt="master card"></img>
              <img src="https://codepath-student-store-demo.surge.sh/assets/paypal.6a45b239.svg" alt="paypal"></img>
              <img src="https://codepath-student-store-demo.surge.sh/assets/visa.a818ddc4.svg" alt="visa"></img>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}