import React from "react";
import back from "./images/mainBg.png"
import Tile from "./Tile";

export default function Section1()
{
    return(
        <div className="section--1">
            <img src={back}></img>
            <Tile />
        </div>
    )
}