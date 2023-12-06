import React, { useEffect, useState } from "react";

export default function DigitalClock() {
  // useEffect(() => {
  //     document.body.backgroundColor = "blue";
  //   });

  const time = new Date().toLocaleTimeString();
  const [ctime, settime] = useState(time);

  const settime1 = () => {
    time;
    settime(time);
  }

  setInterval(settime1,1000)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "5px solid white",
          padding: "30px",
          background: "black",
        }}
      >
        <h1 style={{ color: "white" }}>{ctime}</h1>
      </div>
    </div>
  );
}
