import React from "react";
import Nav from "./Nav";
import IncDecCounter from "./button";
import "./checkout.css";

const CheckOut = () => {
  return (
    <div>
      <Nav/>
    <div className="Outer">
      <div className="rectangle67">
        <div className="rect68">
          <img className="rect66" src="./images/iron.png" />
          <div className="dec">
            Item Description
            <p className="de">Description of items displayed</p>
          </div>
          <div className="frame">
            <h3 className="textCheck">Checkout Menu!</h3>
            <div>
              <p className="textQuantity">Quantiy:</p>
              <span className="quantity">
                <IncDecCounter></IncDecCounter>
              </span>
            </div>
            <div>
              <p className="number">Number of Days:</p>
              <span className="quantity1">
                <IncDecCounter></IncDecCounter>
              </span>
            </div>
            <div className="textLocation">
              Location:<input className="rectangle72" type="text"></input>
            </div>
            <div className="rectangle70">
              <span className="rentText">Rent</span>
            </div>
            <div className="rectangle71">
              <span className="buy">Buy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default CheckOut;
