import React, { useEffect, useState }  from 'react';
import Card from './Card';

const CharacterList = () => {
    
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character').then(
        (response) => response.json()
      );
      setCharacterList(data.results)
    })();
}, [])


  return (
    <>
    {characterList.map((character) =>(
        <Card key={character.id} character={character}/>
          ))}
    </>
  )
}

export default CharacterList