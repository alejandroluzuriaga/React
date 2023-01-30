import { useState } from 'react'
import './App.css'
import MyState from './components/MyState'
import ObjectState from './components/ObjectState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <MyState/>
        <ObjectState/>
    </div>
  )
}

export default App
