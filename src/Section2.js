import React from "react";
import MakeRequest from "./MakRequest";
import request from "./images/requestColumn.png"
export default function Section2()
{
    return(
        <div className="section--2">
            <img src={request}></img>
            <MakeRequest />
        </div>
    )
}