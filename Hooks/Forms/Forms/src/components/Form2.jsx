import React from 'react'
import { useForm } from 'react-hook-form'

const Form2 = () => {
    const { handleSubmit, register } = useForm({ //
        defaultValues:{
            superHero: '',
            superPower:''
        }
    })

    const onSubmit = (values) =>{
        console.log('React Hook Form submit', values)
    } //This shows us the object with every field of the form in console.
  return (
    /* "handleSubmit" will validate our inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="superHero">Superhero's name:</label> 
    <input 
        {...register('superHero')}
        type="text" 
        id="superhero" 
    />

    <br />
    <label htmlFor="superPower">Superpower's name:</label> 
    <input 
        {...register('superPower')}
        type="text" 
        id="superPower" 
    />
      <br />

      <button type="submit">Send!</button>
      </form>
  )
}

export default Form2