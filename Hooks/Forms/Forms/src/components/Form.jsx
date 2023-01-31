import React, { useState } from "react";

//This file is an example of what we shouldn't do when working on forms in React. This is what we would usually think at first when we're learning. States are not efficient in long forms.
//React has a special library made for creating forms called 'React hook form' that will help us create efficient forms and avoid all the checks and restrictions
    //our form must have, and work faster and cleaner. To install this library with vite, write in terminal 'npm i react-hook-form'. We'll use it in Forms2.jsx.

const Form = () => {
    const [superHero, setSuperHero] = useState('');
    const [superPower, setSuperPower] = useState('');
    

  const handleSubmit = (event) => {
    event.preventDefault(); //Prevents web page to reload.
    if(!superHero || !superPower){
        alert("Both fields are required.")
        return;
    }
    console.log("Form submit");
    // sendSuperHero({name: superHero, power: superPower}) //Lets imagine this function sends object to an API (its not created)
  };

  return ( //Do not use 'action' property in forms in React neither submit buttons. Instead we can use 'onSubmit' property in form, and handle it with a function.
    <form onSubmit={handleSubmit}>
      <label htmlFor="superHero">Superhero's name:</label> 
      <input 
        type="text" 
        name="superhero" 
        id="superhero" 
        onChange={(event) =>{setSuperHero(event.target.value)}}/>

        <br />

      <label htmlFor="superPower">Superpower's name:</label> 
      <input 
        type="text" 
        name="superPower" 
        id="superPower" 
        onChange={(event) =>{setSuperPower(event.target.value)}}/>

      <br />

      <button type="submit">Send!</button>
    </form> 
    );
};

export default Form;
