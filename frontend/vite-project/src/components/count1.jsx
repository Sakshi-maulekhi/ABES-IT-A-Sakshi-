import React from 'react'

function count1() {
    function increment() {
        const[count,setCount]  = useState(0);
        setCount(count + 1);
    }
    function decrement() {
        const[count,setCount]  = useState(0);
        setCount(count-1);

    }
  return (
    <div>
      <button onClick={increment}> + </button>
      <span>0</span>
      <button onClick = {decrement}>-</button>
    </div>
  )
}

export default count1
