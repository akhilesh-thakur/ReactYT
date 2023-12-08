import React, { useState } from "react";
import "./Forms.css";

export default function LoginForm() {
  const [text, settext] = useState("");
  const [text2, settext2] = useState("");

  const [btntext, setbtntext] = useState();
  const [btntext2, setbtntext2] = useState();

  const func = (event) => {
    settext(event.target.value);
  };

  const funcPass = (event) => {
    settext2(event.target.value);
  };

  const func2 = (event) => {
    event.preventDefault()
    setbtntext(text)
    setbtntext2(text2)
  };

  return (
    <div className="formpa">
        <form action="" onSubmit={func2}>
      <div className="form">
        <h1 style={{ fontSize: "xxx-large" }}>Login! {btntext} {btntext2}</h1>
        <input type="text" placeholder="Enter username" onChange={func} value={text} />
        <input type="password" placeholder="Enter password" onChange={funcPass} value={text2} />
        <button>Submit</button>
      </div>
        </form>
    </div>
  );
}