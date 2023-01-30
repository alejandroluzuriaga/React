//Basically the next code is an example of how to use props in React. Name and surname are attributes
//defined in App.jsx for our Greeting's function, and we can 'inherit' them and use.
import React from 'react'

const Greeting = ({name, surname}) => {
    console.log(name, surname);
  return (
    <div>Hello {name} {surname}!</div>
  )
}

export default Greeting
