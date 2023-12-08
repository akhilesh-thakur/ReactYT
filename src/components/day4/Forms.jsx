import React, { useState } from "react";
import "./Forms.css";

export default function Forms() {
  const [text, settext] = useState("");
  const [btntext, setbtntext] = useState();

  const func = (event) => {
    settext(event.target.value);
  };

  const func2 = () => {
    setbtntext(text)
  };

  return (
    <div className="formpa">
      <div className="form">
        <h1 style={{ fontSize: "xxx-large" }}>Hello! {btntext}</h1>
        <input type="password" placeholder="Enter your name" onChange={func} value={text} />
        <button onClick={func2}>Submit</button>
      </div>
    </div>
  );
}
