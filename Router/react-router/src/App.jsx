import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <header>
        <h1>React Router v6 😎</h1>
     </header>
     <div>
        <nav>
          <NavLink to="">Home 🏠</NavLink>
          <NavLink to="programming-languages">Programming Languages 💻</NavLink>
          <NavLink to="about">About🖐</NavLink>
        </nav>
     </div>
     <main>
      <Outlet/>
     </main>
     <footer>Created by Alejandro</footer>
    </div>
  )
}

export default App
