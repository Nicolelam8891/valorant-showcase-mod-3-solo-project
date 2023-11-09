import "./CharacterContainer.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";

const CharacterContainer = ( { getAllData, characters, error } ) => {
 
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
      {characterCards}
      {error && <p className='error-message'>{error}</p>}
    </main>
  );
};

//{characterCard} This will render all the Card components
export default CharacterContainer;
