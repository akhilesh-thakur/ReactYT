import { useState } from 'react'

function NumberGame(props) {

  const cname = ["Russia","America","UAE"]
  const text = "Welcome to Dubai Habibi love form"
  document.body.style.background = "grey"

  const [x,setx] = useState(0)
  let func = ()=>{
    setx(x+1)
  }
 
  let func2 = ()=>{
    setx(x-1)
  }

  let func3 = () => {
    setx(0)
  }

  return (
    <>
    <h1>Welcome to the {props.course} course of self learning</h1>
    <hr /> <h2>Program to increase,decrease and reset the value</h2>

    <h1>{x}</h1>
     <button onClick={func}>Increase</button>
     <button onClick={func2}>Decrease</button>
     <button onClick={func3}>Reset</button>
    </>
  )
}

export default NumberGame
