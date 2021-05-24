import React from "react";
import CardItem from "./CardItem";

import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Shape it up!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-6.jpg"
              text="Fitness leads you to a better life."
              label="Fashion"
              path="/"
            />
            <CardItem
              src="images/img-7.jpg"
              text="The pain you suffer today is the sign of tomorrow’s victory."
              label="Lifestyle"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Stay fit, stay healthy.
              "
              label="Sports"
              path="/"
            />
            <CardItem
              src="images/img-9.jpg"
              text="Exercise your psyche and body."
              label="Popular"
              path="/"
            />
            <CardItem
              src="images/img-10.jpg"
              text="Your body hears everything that your mind says."
              label="Nature"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
