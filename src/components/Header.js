import React from "react"
import zomato_img from "../image/Zomato-PNG-Logo-White.png"
export default function Header(){
    return(
        <header>
            <div className="bg-image"></div>
            <nav className="header--nav">
                <h4>Get the app</h4>
                <div className="nav--detail">
                    <h4 className="side">Add Restaurant</h4>
                    <h4 className="side">Log In</h4>
                    <h4 className="side">Sign up</h4>
                </div>
            </nav>
            <img src={zomato_img} className="header--title-img" alt="zomato icon" />
            <p className="header--text">Discover the best food & drinks in <b>Indore</b></p>
        </header>
    )
}