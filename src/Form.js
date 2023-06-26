import React from "react";
import {Outlet, Link,useNavigate} from "react-router-dom"

export default function Form()
{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    
    function handleEmailChange(event)
    {
        setEmail(event.target.value)
    }
    function handlePasswordChange(event)
    {
        setPassword(event.target.value)
    }
    const navigate=useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        navigate('/');
    }
    return(
        <form onSubmit={handleSubmit}>
            <p className="email">Email</p>
            <input type="email"
            placeholder="Enter you email"
            onChange={handleEmailChange}
            name="email"
            value={email}
            />
            <br></br>
            <p className="email">Password</p>
            <input type="password"
            placeholder="........"
            onChange={handlePasswordChange}
            name="password"
            value={password}
            />
            <p className="forgot"><a>Forgot Password?</a></p>
            <button type="submit">Login</button>
            <br>
            </br>
            <p className="linkto">Don't have an account? <span className="create"><Link to="/account">Create an Account!</Link></span></p>
            <Outlet />
        </form>
    )
}