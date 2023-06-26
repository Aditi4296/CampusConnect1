import React from "react";
import avatar from "./images/Avatar.png"
import logo from "./images/CampusConnect_Logo.png"
import {Outlet, Link,useNavigate} from "react-router-dom"

export default function Nav(){
    const userid = localStorage.getItem("userId")
    const handleSignOut = () => {
        localStorage.removeItem("userId");
        window.location.reload();
    }
    return(
        <div  className="navbar">
            <div className="campus">
            <Link to="/"><img style={{width:"100px"}} src={logo}></img></Link>
            </div>
            <div className="center">
               <Link to="/"> <p>Home</p></Link>
                <p>About US</p>
                <Link to="/sell"><p>Sell</p></Link>
                <Link to="/store"><p>Store</p></Link>
                <Link to="/community"><p>Community</p></Link>
            </div>
            {
                userid?
                <div className="right--div">                
                <Link to="/" onClick={handleSignOut}><p>Signout</p></Link>
                <img src={avatar}></img>
                 </div>:
            
                <div className="right--div">                
                    <Link to="/login"><p>Login/Signup</p></Link>
                </div>
            }
            <Outlet />
        </div>
    )
}