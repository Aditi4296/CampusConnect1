import React from "react";
import Nav from "./Nav";
import "./Request.css";
const RequestItem = () => {
  return (
    <div className="mainbox">
      <Nav />
      <img className="board" src="./images/board.png"></img>
      <div className="rectangle24">
        <p className="request">Request Item:</p>
        <input className="rectangle27" type="text"></input>

        <p className="priceExpect">Price expected:</p>
        <input className="rectangle28" type="text"></input>
        <div className="rectangle25">
          <p className="searchText">
            <a href="#">Search</a>
          </p>
        </div>
      </div>

      <div className="rectangle26">
        <div>
          <p className="heading">Search Items according to category</p>
        </div>
        <div className="rectangle29">
          <p className="text1">Footwear</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle30">
          <p className="text1">Electrical Appliances</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle31">
          <p className="text1">Study Material</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle32">
          <p className="text1">Stationary</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle33">
          <p className="text1">Accessories</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle34">
          <p className="text1">Clothes</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default RequestItem;
