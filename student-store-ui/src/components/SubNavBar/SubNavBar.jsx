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
                               onChange={ (event) => setSearchInput(event.target.value)}
                        />
                        <button>Search</button>
                    </div>

                    <div className="filter">
                        {
                            categories.map((category) => {
                                return <button key={category.toLowerCase()}  onClick={() => setSelectedCategory(category.toLowerCase())}>
                                    {category}
                                </button>
                            })
                        }
                    </div>

                    <div className="links">
                        <span className="help"></span>
                        <div className="cart"></div>
                    </div>
                </div>
            </div>
      </div>
    )
}