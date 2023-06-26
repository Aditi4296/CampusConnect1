import React from "react";
import ReactApp from "./cards";
import { Card } from "./cards";
import Nav from "./Nav";
import './rentBuy.css';
const RentBuy = () => {
  return (
    <div>
      <Nav/>
      <div className="main--box">
        <div className="LeftBox">
          <div className="image"><img src="./images/shop.png"/></div>
          <span className="heading1">Categories</span>
          <ul className="list">
            <li>Footwear</li>
            <li>Accessories</li>
            <li>Food</li>
            <li>Electrical Appliances</li>
            <li>Study Material</li>
            <li>Clothes</li>
            <li>Stationary</li>
            <li>Miscellaneous</li>
            <li>Daily Need</li>
          </ul>
        </div>
          <div className="bg">
            <div className="col">
              <Card
                imgSrc="./images/assignment.png"
                imgAlt="Card Image 1"
                title="Maths Assignment"
                description="Add to Cart"
                buttonText="Learn More"
                link="card2"
              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"
              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"
              />
               <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 1"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card1"
              />
            </div>
            <div className="col">
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 1"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card1"
              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"
              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"

              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"/>
            </div>
            <div className="col">
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 1"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card1"
              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"
              />
              <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 3"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card2"
              />
               <Card
                imgSrc="./images/kettle.png"
                imgAlt="Card Image 1"
                title="Card Title"
                description="Add to cart"
                buttonText="Learn More"
                link="card1"
              />
            </div>
          </div>
        </div>
      </div>
  );
};
export default RentBuy;
