import React from 'react';
import { useEffect, useState } from 'react';
import Singlecharacter from './components/SingleCharacter';
import "./stiles/header.css"






const App = ()=> 
{
//State
const [Characters, SetCharacters]= useState([]);

  //consulta de la API
  const handleAPI = async()=>{
    const response= await fetch("https://rickandmortyapi.com/api/character/?page=2");
    const {results} = await response.json();
    console.log(results)
    //pasamos json a el state
    SetCharacters(results)
    
  }
  

  //useEffect
useEffect(()=>{
  handleAPI()},[]

)
  

  return (
    <div className="container">
    
    {Characters.map(character=>(
      <Singlecharacter name={character.name} specie={character.species} foto={character.image} key={character.id}/>

    ))}

   </div>
  );
 
}

export default App;
