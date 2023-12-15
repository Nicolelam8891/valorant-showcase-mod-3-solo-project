import { useEffect, useState } from "react";
import "./CharacterDetails.css";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const CharacterDetails = ({ addToTeamOne, addToTeamTwo, errorMessage, confirmationMessage, setConfirmationMessage, setErrorMessage }) => {
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
      setCharacter(data.data);
    } catch (event) {
      console.error(event.message);
      setError(event.message);
    }
  };

  useEffect(() => {
    getCharacterDetail();
    setErrorMessage('');
    setConfirmationMessage('');
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

        <div className='character-full-portrait-container'>
          <button
            className='add-to-team-one-button'
            onClick={() => addToTeamOne(character)}
            >
            Add to Team 1
          </button>
          <button
            className='add-to-team-two-button'
            onClick={() => addToTeamTwo(character)}
            >
            Add to Team 2
          </button>
            {errorMessage && (
              <div className='team-error-message'>{errorMessage}</div>
            )}
            {confirmationMessage && (
              <div className='team-confirmation-message'>{confirmationMessage}</div>
            )}
          <img
            src={character.fullPortrait}
            className='character-full-portrait'
          />
        </div>

        <div className='character-info-container'>
          <p className='single-character-name'>
            <strong>Name: </strong>
            {character.displayName}
          </p>
          <p className='single-character-description'>
            {character.description}
          </p>
          <p className='single-character-role'>
            <strong>Role: </strong>
            {character.role.displayName}
          </p>
          <p className='single-character-role-description'>
            {character.role.description}
          </p>
          <h3 className='abilities-name'>
            <strong>Abilities: </strong>
          </h3>

          <div className='ability-section'>
            <ul className='ability-details'>
              {character.abilities.map((ability) => (
                <div className='ability-slots'>
                  <img
                    className='ability-icon'
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
      </div>
    </div>
  );
};

export default CharacterDetails;

CharacterDetails.propTypes = {
  addToTeam: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  confirmationMessage: PropTypes.string,
  setConfirmationMessage: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired
};
