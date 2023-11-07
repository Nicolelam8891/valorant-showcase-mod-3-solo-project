import './CharacterContainer.css'
import Card from '../Card/Card'
import { useState, useEffect } from 'react'


const CharacterContainer = () => {

  const [characters, setCharacters] = useState([])
  const [error, setError] = useState("")

  const getAllData = async () => {
  try {
    const response = await fetch('https://valorant-api.com/v1/agents');
    if (!response.ok) {
      throw new Error(`Sorry, there is an error! status: ${response.status}. Please try again later`);
    }
    const data = await response.json();
    console.log(data);
    setCharacters([...characters, ...data.data]);
  } catch (event) {
    console.error(event.message);
    setError(event.message)
  }
  };
  
  useEffect(() => {
    getAllData()
  }, [])

  const characterCards = characters.map((character) => {
    const { displayIcon, displayName, role, uuid } = character;
    const roleDisplayName = role ? role.displayName : 'No role';

    return (
      <Card 
        key={uuid}
        icon={displayIcon} 
        name={displayName} 
        role={roleDisplayName} 
      />
    );
  });


  return (
   
    <main className='character-container'>
       <h2>Characters go here!</h2>
       {characterCards}
       {error && <p className='error-message'>{error}</p>}
    </main>
  )

  }

//{characterCard} This will render all the Card components
export default CharacterContainer;