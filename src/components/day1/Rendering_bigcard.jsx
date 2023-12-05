import React from "react";

import Bigcard from "./Bigcard";
import data from "./Bigcard_data";
import "./bigcard.css"

function RenderCards() {
  function card(value) {
    return (
      <Bigcard
        key={value.id}
        image={value.image}
        heading={value.heading}
        para={value.para}
        link={value.link}
        button={value.button}
      />
    );
  }

  return (
    <>
      <div style={{ backgroundColor: 'black'}}>
        <div className="heading_flex">
          <h1 className="heading_style">
            Welcome to the Card World! Checkout our Card lists
          </h1>
        </div>

        {data.map(card)}
      </div>
    </>
  );
}

export default RenderCards;
