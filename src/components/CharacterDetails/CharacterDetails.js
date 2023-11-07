import { useEffect, useState } from "react";
import "./CharacterDetails.css";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getCharacterDetail = async () => {
      try {
        const response = await fetch(
          `https://valorant-api.com/v1/agents/${id}`
        );
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

    getCharacterDetail();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className='character-details'>
      <img
        src={character.fullPortrait}
        className='character-full-portrait'
      />
      {/* {error && <p className='error-message'>{error}</p>} */}
    </div>
  );
};

export default CharacterDetails;
