import React, { useState } from 'react'


const ObjectState = () => {
    const [avenger, setAvenger] = useState({
        name: "Tony Stark",
        superHeroName: "Ironman",
        age: 45,
    })

  return (
    <div>
      <h4>
        {avenger.name} || {avenger.superHeroName} || {avenger.age} years old
      </h4>

      <input 
      type="text" 
      placeholder="Set name" 
      value={avenger.name} 
      onChange={(e) => setAvenger({...avenger, name: e.target.value})}/>

      <input
        type="text"
        placeholder="Set superHeroName"
        value={avenger.superHeroName}
        onChange={(e) => setAvenger({...avenger, superHeroName: e.target.value})}
        />

      <input 
      type="number" 
      placeholder="Set age" 
      value={avenger.age} 
      onChange={(e) => setAvenger({...avenger, age: e.target.value})}/>
    </div>
  );
}

export default ObjectState