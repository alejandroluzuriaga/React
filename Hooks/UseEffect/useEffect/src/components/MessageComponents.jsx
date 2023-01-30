import React, {useEffect} from 'react'
  //Message for unmounting 'EffectUnmount.jsx'.
const MessageComponents = () => {

    useEffect(() => {
        console.log('Say hello to this component!')

        return() =>{ //This is what useEffect expects to return when unmounting the component from the DOM.
            console.log('Say goodbye to this component! :(')
        }
    }, [])
  return (
    <h4>I'm visible!</h4>
  )
}

export default MessageComponents