import React, { useState } from 'react'

const MyState = () => {

    const [name, setName] = useState("Ziggy Stardust");

  return (
    <div>
        <h1>Welcome {name}!</h1>
        <input 
        type="text" 
        value = {name}
        placeholder='Type a name' 
        onChange={(e) => setName(e.target.value)}/>
    </div>
  )
}

export default MyState