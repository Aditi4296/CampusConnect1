import React from "react"
import og from "./images/og.jpg"
import Form2 from "./Form2"

export default function Banalebhai()
{
    return(
        <div className="main-component">           
           <div className="form2--div">
           <div className="hello">
                <p>Create An Account !</p>
            </div>
                <Form2 />
           </div>
           <div className="image2--div">
           <img src={og} >
                </img>
           </div>
        </div>
    )
}