import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Form2 from './components/Form2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>React Forms!</h1>
        <Form2 />
    </div>
  )
}

export default App 
