import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
   <div className="">
    <h3 data-testid="counter">{counter}</h3>
    <button  onClick={()=>setCounter(prev=> prev + 1)}>Increment</button>
    <button data-testid="de" onClick={()=>setCounter(prev=> prev - 1)}>Decrement</button>
   </div>
  )
}

export default Counter