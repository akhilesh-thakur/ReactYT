// import React from "react";
// import './bigcard.css'

// export default function Bigcard(props) {
    
//   return (
//      <div className="card" style={{ backgroundColor: 'white'}}>
//     <img src={props.image} alt="Card Image"/>
//     <div className="card-content">
//       <h2>{props.heading}</h2>
//       <p>{props.para}</p>
//       <a href={props.link} className="button">{props.button}</a>
//     </div>
//   </div>
//   );
// }






// LEARNINGS

// You can create multiple cards using multiple ways:

// 1st method

// as it is like import the Bigcard.jsx in App.jsx and copy paste <Bigcard/> multiple times






// 2nd method: YOUR DATE WILL BE IN DIFFERENT FILE SAY BIGCARD_DATA.JSX FOR EXAMPLE AND THEN YOU HAVE TO IMPORT THAT DATA FILE TO THE APP.JSX AND YOU CAN ACCESS THE ARRAY DATA BY USING THE {data[0].image} etc

{/* <div>
<Bigcard
  image={data[0].image}
  heading={data[0].heading}
  para={data[0].para}
  link={data[0].link}
  button={data[0].button}
/>
<Bigcard
  image={data[1].image}
  heading={data[1].heading}
  para={data[1].para}
  link={data[1].link}
  button={data[1].button}
/>
<Bigcard
  image={data[2].image}
  heading={data[2].heading}
  para={data[2].para}
  link={data[2].link}
  button={data[2].button}
/>
<Bigcard
  image={data[3].image}
  heading={data[3].heading}
  para={data[3].para}
  link={data[3].link}
  button={data[3].button}
/>
</div> */}




// 3RD METHOD: HERE YOU ARE STORING THE DATA IN A FUNCTION AND CALLING THAT FUNCTION IN THE <Bigcard/>. HERE WE WILL BE USING THE MAP ARRAY METHOD

// write this function before the return() in App function
// NOTE** MUST USE THE KEY INSIDE ALSO THE ARRAY DATA MUST HAVE THE UNIQUE ID 
// function card(value) {
//   return (
//     <Bigcard
//       key={value.id}
//       image={value.image}
//       heading={value.heading}
//       para={value.para}
//       link={value.link}
//       button={value.button}
//     />
//   );
// }

// // call the function inside the return() in the App function

// {data.map(card)} // data is the a func where all our card data have stored
















// New bigcard used in actual page

import React from "react";
import './bigcard.css'

export default function Bigcard() {
    
  return (
     <div className="card" style={{ backgroundColor: 'white'}}>
    <img src="../src/components/images/heaven.jpg" alt="Card Image"/>
    <div className="card-content">
      <h2>Welcom to PortX card portal</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ratione harum ut, voluptatibus nesciunt voluptate in blanditiis cum repellendus voluptatem at nulla aut!</p>
      <a href="https://www.react.dev" className="button">Submit</a>
    </div>
  </div>
  );
}