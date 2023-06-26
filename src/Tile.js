import React from "react";

export default function Tile(){
    return(
        <div>
        <div className="tile">
           <div className="row--1">
            <div className="block block--1">
            <p>SELL</p>
            </div>
            <div className="block block--2">
            <p>RENT</p>
            </div>
           </div>
           <div className="row--1">
            <div className=" block block--3">
            <p>REQUEST</p>
            </div>
            <div className="block block--4">
            <p>BUY</p>
            </div>
           </div>
           </div>
           <div className="content--tile">
           
            <p className="text-home">Maybe there is someone looking for your product inside your campus, so why not just sell it here.</p>
           </div>
        </div>
    )
}