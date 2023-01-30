import React from 'react';

const Card = ({character}) => {
    console.log(character)
  return (
    <div className="Images-RicknMorty">
          <h2>{character.name}</h2>
          <p>Id: {character.id}</p>
          <p>Status: {character.status}</p>
          <p>{character.species}</p>
          <img src={character.image} alt={character.name}/>
    </div>
  )
}

export default Card