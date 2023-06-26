import React from "react";
import {Outlet, Link,useNavigate} from "react-router-dom"
import {auth} from './firebase'
import {signInWithEmailAndPassword} from 'firebase/auth' 
import {nanoid} from "nanoid"

export default function Form()
{
    const [email,setEmail]=React.useState("");
    const [password,setPassword]=React.useState("");
    
    const navigate=useNavigate();

    const register = e => {
        e.preventDefault()
        
          // Create a new user with email and password using firebase
            signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res.user)
                setEmail('')
                setPassword('')
                localStorage.setItem("userId", nanoid())
                navigate('/');
              })
              .catch((err) => console.log(err.message));
      }
    function handleEmailChange(event)
    {
        setEmail(event.target.value)
    }
    function handlePasswordChange(event)
    {
        setPassword(event.target.value)
    }
    
    return(
        <form onSubmit={register}>
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
            <p></p>
            <button type="submit">Login</button>
            <br>
            </br>
            <p className="linkto">Don't have an account? <span className="create"><Link to="/account">Create an Account!</Link></span></p>
            <Outlet />
        </form>
    )
}