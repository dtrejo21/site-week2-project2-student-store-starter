//import * as React from "react"
import "./Logo.css"
import { Link } from "react-router-dom"

export default function Logo(){
    return(/*Have to use link component from react-router-dom*/
        <div className="logo">
            <Link to="/">
                <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg" alt="codepath logo"></img>
            </Link>
        </div>

    )

}