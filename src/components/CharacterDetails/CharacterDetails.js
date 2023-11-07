import { useEffect, useState } from "react";
import "./CharacterDetails.css";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  const getCharacterDetail = async () => {
    try {
      const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
      if (!response.ok) {
        throw new Error(
          `Sorry, there was an error! status: ${response.status}. Please try again later.`
        );
      }
      const data = await response.json();
      console.log(data);
      setCharacter(data.data);
    } catch (event) {
      console.error(event.message);
      setError(event.message);
    }
  };

  useEffect(() => {
    getCharacterDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='single-character-page'>
      <div className='character-details'>
        <img src={character.fullPortrait} className='character-full-portrait' />
        <p className='single-character-name'>
          <strong>Name: </strong>
          {character.displayName}
        </p>
        <p className='single-character-description'>
          <strong>Description: </strong>
          {character.description}
        </p>
        <p className='single-character-role'>
          <strong>Role: </strong>
          {character.role.displayName}
        </p>
        <p className='single-character-role-description'>
          <strong>Role description: </strong> {character.role.description}
        </p>
        <h3>
          <strong>Abilities: </strong>
        </h3>
        <div className='ability-section'>
          <ul className='ability-details'>
            {character.abilities.map((ability) => (
              <div className='ability-slots'>
                <img
                  class='ability-icon'
                  src={ability.displayIcon}
                  alt={ability.displayName}
                />
                <h3 className='ability-name'>{ability.displayName}</h3>
                <p className='ability-description'>{ability.description}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
      {/* {error && <p className='error-message'>{error}</p>} */}
    </div>
  );
};

export default CharacterDetails;
