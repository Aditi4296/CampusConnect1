import React from "react";
import Nav from "./Nav";
import "./Request.css";
const RequestItem = () => {
  return (
    <div className="mainbox--div">
      <Nav />
      <div className="board--div">
      <img className="board" src="./images/board.png"></img>
      <div className="rectangle24">
        <div className="entry">
        <p className="request">Request Item:</p>
        <input className="rectangle27" type="text"></input>
        </div>
        <div className="entry">
        <p className="request">Price expected:</p>
        <input className="rectangle28" type="text"></input>
        </div>
        <p></p>
        <button type="button" className="search--request">Search</button>
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
        <div className="rectangle29">
          <p className="text1">Electrical Appliances</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle29">
          <p className="text1">Study Material</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle29">
          <p className="text1">Stationary</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle29">
          <p className="text1">Accessories</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
        <div className="rectangle29">
          <p className="text1">Clothes</p>
          <select className="drop1">
            <option value="Item 1">Item 1</option>
            <option value="Item 2">Item 2</option>
            <option value="Item 3">Item 3</option>
          </select>
        </div>
      </div>
      </div>
    </div>
  );
};
export default RequestItem;
