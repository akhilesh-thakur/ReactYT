// TAKING INPUT ON THE DOM

// import React, { useState } from 'react';

// export default function Calculator() {
//   const [a, setA] = useState("");
//   const [b, setB] = useState("");
//   const [c, setC] = useState("");
//   const [out, setOut] = useState("");

//   const handleInputChange = (e, inputType) => {
//     const value = e.target.value;
//     if (inputType === 'a') setA(value);
//     else if (inputType === 'b') setB(value);
//     else if (inputType === 'c') setC(value);
//   };

//   const calc = () => {
//     const numA = parseInt(a);
//     const numB = parseInt(b);

//     if (c === "+") {
//       setOut(numA + numB);
//     } else if (c === "-") {
//       setOut(numA - numB);
//     } else if (c === "*") {
//       setOut(numA * numB);
//     } else if (c === "/") {
//       setOut(numA / numB);
//     } else {
//       alert("Invalid operator");
//     }
//   };

//   return (
//     <>
//       <div>
//         <label>Enter the first number: </label>
//         <input type="number" value={a} onChange={(e) => handleInputChange(e, 'a')} />
//       </div>
//       <div>
//         <label>Enter the second number: </label>
//         <input type="number" value={b} onChange={(e) => handleInputChange(e, 'b')} />
//       </div>
//       <div>
//         <label>Enter the operator: </label>
//         <input type="text" value={c} onChange={(e) => handleInputChange(e, 'c')} />
//       </div>
//       <div>
//         <button onClick={calc}>Calculate</button>
//       </div>
//       <div>
//         <h1>The result is {out}</h1>
//       </div>
//     </>
//   );
// }



// SECOND PROGRAM: TAKING INPUT AS A PROMP

import React, { useState, useEffect } from 'react';

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [out, setOut] = useState("");

  useEffect(() => {
    // Use window.prompt for input when the component mounts
    const userInputA = window.prompt("Enter the first number");
    setA(userInputA);

    const userInputB = window.prompt("Enter the second number");
    setB(userInputB);

    const userInputC = window.prompt("Enter the operator");
    setC(userInputC);
  }, []); // Empty dependency array to ensure useEffect runs only once on mount

  const calc = () => {
    const numA = parseInt(a);
    const numB = parseInt(b);

    if (c === "+") {
      setOut(numA + numB);
    } else if (c === "-") {
      setOut(numA - numB);
    } else if (c === "*") {
      setOut(numA * numB);
    } else if (c === "/") {
      setOut(numA / numB);
    } else {
      alert("Invalid operator");
    }
  };

  return (
    <>
      <div>
        <h1>Calculator</h1>
        <div>
          <p>First number: {a}</p>
          <p>Second number: {b}</p>
          <p>Operator: {c}</p>
        </div>
        <div>
          <button onClick={calc}>Calculate</button>
        </div>
        <div>
          <h1>The result is {out}</h1>
        </div>
      </div>
    </>
  );
}
