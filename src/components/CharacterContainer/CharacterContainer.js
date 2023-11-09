import "./CharacterContainer.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const CharacterContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");

  const getAllData = () => {
    fetch("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Sorry, there is an error! status: ${response.status}. Please try again later`
          );
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCharacters([...characters, ...data.data]);
      })
      .catch((event) => {
        console.error(event.message);
        setError(event.message);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const characterCards = characters.map((character) => {
    const { displayIcon, displayName, role, uuid } = character;
    const roleDisplayName = role ? role.displayName : "No role";

    return (
      <Card
        key={uuid}
        id={uuid}
        icon={displayIcon}
        name={displayName}
        role={roleDisplayName}
      />
    );
  });

  return (
    <main className='character-container'>
      <div className='line'></div>
      {characterCards}
      {error && <p className='error-message'>{error}</p>}
    </main>
  );
};

//{characterCard} This will render all the Card components
export default CharacterContainer;
