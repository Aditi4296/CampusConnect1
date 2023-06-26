import React from "react";
import avatar from "./images/Avatar.png"
import {Outlet, Link,useNavigate} from "react-router-dom"

export default function Nav(){
    return(
        <div  className="navbar">
            <div className="campus">
            <Link to="/"><p >CampusConnect</p></Link>
            </div>
            <div className="center">
               <Link to="/"> <p>Home</p></Link>
                <p>About US</p>
                <Link to="/sell"><p>Sell</p></Link>
                <Link to="/store"><p>Store</p></Link>
                <Link to="/community"><p>Community</p></Link>
            </div>
            <div className="right--div">
                <Link to="/login"><p>Login/Signup</p></Link>
                <img src={avatar}></img>
            </div>
            <Outlet />
        </div>
    )
}