import React from "react";

export default function SlotMachine() {
  function Slots(props) {
  
  let {x,y,z} = props

    if (props.x == y && props.y == z) {
      return (
        <div>
          <h1>
            {props.x} {props.y} {props.z}
          </h1>
          <h1>This is Matching</h1> <hr />
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            {x} {y} {z}
          </h1>
          <h1>This is not Matching</h1> <hr />
        </div>
      );
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "yellow",
        }}
      >
        <h1>
          🎰 WELCOME TO{" "}
          <span style={{ fontWeight: "bold", background: "white" }}>
            SLOT MACHINE GAME
          </span>
          🎰
        </h1>
      </div>
      <div
        style={{
          width: "400px",
          height: "600px",
          border: "2px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          marginLeft: "35%",
        }}
      >
        <Slots x = "✅" y = "😋" z = "🚩"/>
        <Slots x = "😊" y = "😊" z = "😊"/>
        <Slots x = "🤡" y = "👍" z = "🐻‍❄️"/>
        <Slots x = "🐵" y = "🐵" z = "🐵"/>
      </div>
    </>
  );
}
