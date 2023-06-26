
import React from "react";
import CircularCard from "./CircularCard"; 
import data from "./itemdata.js"

export default function Section3()
{
    const dataelement = data.map(item=>{
        return <CircularCard item={item}
        />
    })
    return(
        <div className="section--3">
            {dataelement}
        </div>
    )
}