import { useRef, useState } from "react";
import React from "react";
import "./App.css";

import Bigcard from "./components/day1/Bigcard";
import data from "./components/day1/Bigcard_data";

function App() {

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
      <div className="heading_flex">
        <h1 className="heading_style">
          We provide the services of different Card lists
        </h1>
      </div>

      {data.map(card)}
    </>
  );
}

export default App;
