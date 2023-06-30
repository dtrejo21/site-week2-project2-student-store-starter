import * as React from "react"
import "./SubNavBar.css"

const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"]

export default function SubNavBar({setSelectedCategory, searchInput, setSearchInput}){
    return(
        <div className="sub-navbar">
            <div className="content">
                <div className="row">
                    <div className="searchbar">
                        <input type="text" 
                               placeholder="Search"
                               value={searchInput}
                               onChange={ (e) => setSearchInput(e.target.value)}
                        />

                        <button>< i className="material-icons">search</i> </button>    
                    </div>

                    <div className="cart">
                        <p>My Cart</p>
                        <button> <i className="material-icons">shopping_cart</i> </button>
                    </div>  

                    <div className="links">
                        <span className="help"></span>
                        <div className="cart"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="filter">
                        {
                            categories.map((category) => {
                                return <button key={category.toLowerCase()}  onClick={() => setSelectedCategory(category.toLowerCase())}>
                                    {category}
                                </button>
                            })
                        }
                    </div>
                </div>
            </div>
      </div>
    )
}