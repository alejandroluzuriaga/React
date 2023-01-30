import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card';
import CharacterList from './Components/CharacterList';

function App() {
    return (
      <div className="App">
          <CharacterList />
      </div>
    )
}

export default App;
