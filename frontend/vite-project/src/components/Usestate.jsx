// import React, { useState } from 'react'

// function Usestate() {
//     //  const [count, setCount] = useState(0);

//     //  function increment(){
//     //     setCount(count+1);
//     //  }
//     //  function decrement(){
//     //     setCount(count-1);
//     //  }
//     function changeColor(){
//         const[color,setColor] = useState("red");
//         setColor("blue");
//     }

//   return (
//     <div >
//       {/* <h2>Count: {count}</h2>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button> */}
//       <button onClick={changeColor}>Click me</button>

//     </div>
//   )
// }
import React, { useState } from 'react';

function Usestate() {
  
  const [color, setColor] = useState("red");

  function changeColor() {
    setColor("blue");
  }

  return (
    <div>
      <h2 style={{ color: color }}>This text is {color}</h2>
      <button onClick={changeColor}>Click me</button>
    </div>
  );
}




export default Usestate;
// import React from 'react'

// function Usestate() {

//   let count = 0;

//   function change() {
//     count++;
//     console.log("Count:", count);
    
//     document.getElementById("count").textContent = count;
//   }

//   return (
//     <div>
//       <h2>Count: <span id="count">0</span></h2>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default Usestate;

