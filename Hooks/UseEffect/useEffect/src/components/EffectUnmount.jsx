import React, { useEffect, useState } from 'react'
import MessageComponents from './MessageComponents';

//Short example on what should useEffect do when unmounting component. Ln 10.
const EffectUnmount = () => {
    const [visible , setVisible] = useState(false);

  return ( //Returns always a button 'Super button!' and depending on the state, it will show the h4 'I'm visible!' or not.
    <>
    {visible && <MessageComponents/>}
        <button onClick={() =>setVisible(!visible)}>Super button!</button>
    </>
  )
}

export default EffectUnmount;
