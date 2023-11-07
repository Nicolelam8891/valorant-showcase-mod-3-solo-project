import { useEffect, useState } from "react";
import "./CharacterDetails.css";
import { useParams } from "react-router-dom";


const CharacterDetails = () => {
  const [character, setCharacter] = useState([]);
  const [error, setError] = useState([]);
  const { id } = useParams();

  const getCharacterDetail = () => {
    fetch(`https://valorant-api.com/v1/agents/${id}`)
      .then(response => {
        if(!response.ok) {
          throw new Error(`Sorry, there is an error! status: ${response.status}. Please try again later`)
        }
        return response.json()
      })
      .then(data => {
        console.log(data)
        setCharacter([...character, data])
      })
      .catch(event => {
        console.error(event.message)
        setError(event.message)
      })
  };

  useEffect(() => {
    getCharacterDetail();
  }, []);
};

return (
  <main className="character-details">
    
  </main>
)
export default CharacterDetails;
