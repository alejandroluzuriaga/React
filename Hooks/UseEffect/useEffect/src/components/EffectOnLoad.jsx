import React, { useState, useEffect } from 'react'
//Short example on how useEffect renders on mount.
        //useEffect has two parameters. useEffect(<function>, <dependencies>)
const EffectOnLoad = ({name}) => {
    const [nameState, setNameState] = useState(name);

    useEffect(() =>{
        setTimeout(()=>{
            setNameState("Testing effect")
        }, 1500) //This renders the web first with nameState (coming from prop "name" = "Alex")
                //The timeout function is here just to demonstrate how useEffect is used in the mounting of the component.
                
    }, [])
        //Empty array [] means "Only Run Once, on Mount"
        //You can pass the special value of empty array [] as a way of saying “only run on mount, and clean up on unmount”
        //Anything inside the array will be heard and will re-launch the useEffect function again when changes are made.
        //USEFUL: useEffect is expecting you to return a function that will launch then unmounting component. Check 'MessageComponents'.
  return (
    <div>
        <h1>{nameState}</h1>

        <input 
            type="text"
            value= {nameState}
            onChange = {(e) => setNameState(e.target.value)} />
    </div>
  )
}

export default EffectOnLoad