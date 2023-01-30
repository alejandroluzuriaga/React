import React, { useState, useEffect } from 'react'
//Simple counting component with two buttons: increment, and decrement. Count will render using the state 'count'. 

const Count = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log('useEffect call, count is:', count)
      }, [count]); //[count] is our dependency to track and execute useEffect function every time it changes.
    
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={() =>setCount(count + 1)}>Increment</button>
        <button onClick={() =>setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Count