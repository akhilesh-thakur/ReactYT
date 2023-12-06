import React, { useEffect, useState } from 'react'

export default function GetTime() {

    useEffect(() => {
        document.body.backgroundColor = "blue";
      });

      const time = new Date().toLocaleTimeString();
      const [ctime, settime] = useState(time)

    function settime1(){
        settime(time)
    }

    const timebtn = {
        backgroundColor: "blue",
        color: "#ffffff",
        padding: "10px 20px",
        fontSize: "16px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "8px",
    }
  return (
    <div style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        height: "100vh",
    }}>
    <div style={{
        border: "5px solid blue",
        padding: "30px",
    }}>
        <h1>{ctime}</h1>
        <button onClick={settime1} style={timebtn}>Get Time</button>
    </div>
    </div>
  )
}
