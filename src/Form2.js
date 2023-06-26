import React from "react";
import {Outlet, Link, useNavigate} from "react-router-dom"

export default function Form2()
{
    const [name,setName]=React.useState("");
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    
    function handleNameChange(event)
    {
        setName(event.target.value)
    }
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
        navigate('/login');
    }
    return(
        <form onSubmit={handleSubmit}>
            <p className="name--user">Name</p>
            <input type="name"
            placeholder="Enter you name"
            onChange={handleNameChange}
            name="name"
            value={name}
            />
            <br></br>
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
            <br></br>
            <br></br>
            <button type="submit">Create Account</button>
            <br>
            </br>
            
            <p className="linkto">Already have an account? <span className="create"><Link to="/login">Login!</Link></span></p>
            <Outlet></Outlet>
        </form>
    )
}