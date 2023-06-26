import React from "react"
import shop from "./images/fliped.jpg"
import Form from "./Form"

export default function Main()
{
    return(
        <div className="main-component">           
           <div className="image--div">
                <img src={shop} >
                </img>
           </div>
           <div className="form--div">
            <div className="hello">
                <p>Hello ! Welcome Back</p>
            </div>
            <Form />
           </div>
        </div>
    )
}