import { useEffect, useState } from 'react'
import './App.css'
import EffectOnLoad from './components/EffectOnLoad'
import EffectUnmount from './components/EffectUnmount'
import Count from './components/Count'
import FetchingInput from './components/FetchingInput'

function App() {
  const [count, setCount] = useState(0)

  return ( //Please, call one component. 
    <div className="App">
      {/* <EffectOnLoad name="Alex"/>
      <EffectUnmount />
      <Count/> */}
      <FetchingInput/>
    </div>
  )
}

export default App
