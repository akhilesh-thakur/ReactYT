// in this component I have used two Hooks
// 1. useState
// 2. useEffect

import React, { useState, useEffect } from "react";

export default function NumberGame2() {
  // changing the document background color using the useeffect hook

  useEffect(() => {
    document.body.style.backgroundColor = "black";
  });

  const [x, setvalue] = useState(0);

  function inc() {
    setvalue(x + 1);
  }
  function dec() {
    setvalue(x - 1);
  }
  function res() {
    setvalue(0);
  }

  // css of buttons

  const btncss = {
    backgroundColor: "blue",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "8px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "200px",
          border: "5px solid blue",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "blue" }}>{x}</h1>
        <div>
          <button style={btncss} onClick={inc}>
            Increase
          </button>
          <button style={btncss} onClick={dec}>
            Decrease
          </button>
          <button style={btncss} onClick={res}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
