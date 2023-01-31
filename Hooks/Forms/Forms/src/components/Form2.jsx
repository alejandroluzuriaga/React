import React from 'react'
import { useForm } from 'react-hook-form'

const Form2 = () => {
    const { handleSubmit, register, formState, watch } = useForm({ //We're destructuring 3 things: handleSubmit handles the submit for us (with useForm function)
                                                            //Register: This method allows you to register an input or select element and apply validation rules to React Hook Form. 
                                                            //formState: This object contains information about the entire form state. 
                                                            //Watch: This method will watch specified inputs and return their values. It is useful to render input value and for determining what to render by condition.
        defaultValues:{
            superHero: '',
            superPower:'',
            country:'',
            terms: false,
        }
    })
            //This will show us the object with every field of the form in console.
    const onSubmit = (values) =>{
        console.log('React Hook Form submit', values)
    };

    const country = watch('country');


  return (
    /* "handleSubmit" will validate our inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="superHero">Superhero's name:</label> 
    
    {/* ----------------------------------------------- */}
        <input //This is where we start to see how React Hook Form controls errors and requirements for input values
            {...register('superHero', {
                required:{ //We are controling the requirements of the input in a JS level, not HTML.
                    value: true,
                    message: 'Please, write a name for your superhero!'
                },
                minLength:{
                    value: 2,
                    message: 'Name must have at least two letters!'
                }
            })} 
            type="text" 
            id="superhero" 
        />
        {formState.errors.superHero ? <p style={{color: 'red' }}>{formState.errors.superHero.message}</p> : null}
    {/* ----------------------------------------------- */}

    <br />
    <label htmlFor="superPower">Superpower's name:</label> 
    <input 
        {...register('superPower', {
            required:{
                value: true,
                message: 'Please, write a name for your superhero'
            },
            minLength:{
                value: 3,
                message: 'Name of super power must have at least 3 letters'
            }
        })}
        type="text" 
        id="superPower" 
    />
    {formState.errors.superPower ? <p style={{color: 'red' }}>{formState.errors.superPower.message}</p> : null}

    <br />
    <label htmlFor="country">Select a country:</label> 
    <select {...register('country', { 
        required: {
            value: true,
            message: "'Please, select a country before clicking 'Send'!'"
        }
        }
        )} id="country">

        <option value="">-</option>
        <option value="Spain">Spain</option>
        <option value="Other">Other</option>
    </select>
    {formState.errors.country ? <p style={{color: 'red' }}>{formState.errors.country.message}</p> : null}
    <br />

{!(country === '') ? (
    <>
    <input type="checkbox" id="terms" {...register('terms')}/>
    <label htmlFor="terms">I accept terms and conditions</label>
    </>
) : null}

    <button type="submit" disabled={!formState.isDirty}>Send!</button>
    </form>
  )
}

export default Form2