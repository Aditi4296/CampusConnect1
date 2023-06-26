import React from "react";
import imagebox from "./images/BlackbgStudents.png"
export default function Imagebox()
{
    return(
        <div className="imagebox">
            <p>
            Yes we know we are the future of India, but “in our own way” remains constant!            
            </p>
            <img src={imagebox}alt="image goes here"></img>
        </div>
    )
}