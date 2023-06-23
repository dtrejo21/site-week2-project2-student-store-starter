import "./SubNavBar.css"

export default function SubNavBar(){
    return(
        <div className="sub-navbar">
        <div className="content">
          <div className="row">
            <div className="searchbar">
              <input type="text" placeholder="Search"/>
              <button>Search</button>
            </div>
            <div className="links">
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
    )
}