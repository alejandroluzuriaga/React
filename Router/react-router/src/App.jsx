import './App.css'
import { NavLink, Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
     <header>
        <h1>React Router v6 ð</h1>
     </header>
     <div>
        <nav>
          <NavLink to="">Home ð </NavLink>
          <NavLink to="programming-languages">Programming Languages ð»</NavLink>
          <NavLink to="about">Aboutð</NavLink>
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
