import React from "react";
export default function CircularCard(props)
{
    return(
        <div className="card--circle">
            <div className="circularcard">
                <img src={`../images/${props.item.url}`}></img>
            </div>
            <p>{props.item.title}</p>
        </div>
    )
}