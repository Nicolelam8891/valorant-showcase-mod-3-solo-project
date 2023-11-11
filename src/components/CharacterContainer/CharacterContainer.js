import "./CharacterContainer.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CharacterContainer = ({ getAllData, characters, error }) => {
  console.log("error:=====", error);

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

export default CharacterContainer;

CharacterContainer.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      abilities: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
          displayIcon: PropTypes.string.isRequired,
          displayName: PropTypes.string.isRequired,
          slot: PropTypes.string.isRequired,
        })
      ).isRequired,
      assetPath: PropTypes.string.isRequired,
      background: PropTypes.string.isRequired,
      backgroundGradientColors: PropTypes.arrayOf(PropTypes.string.isRequired)
        .isRequired,
      bustPortrait: PropTypes.string.isRequired,
      characterTags: PropTypes.arrayOf(PropTypes.string),
      description: PropTypes.string.isRequired,
      developerName: PropTypes.string.isRequired,
      displayIcon: PropTypes.string.isRequired,
      displayIconSmall: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
      fullPortrait: PropTypes.string.isRequired,
      fullPortraitV2: PropTypes.string.isRequired,
      isAvailableForTest: PropTypes.bool.isRequired,
      isBaseContent: PropTypes.bool.isRequired,
      isFullPortraitRightFacing: PropTypes.bool.isRequired,
      isPlayableCharacter: PropTypes.bool.isRequired,
      killfeedPortrait: PropTypes.string.isRequired,
      recruitmentData: PropTypes.any,
      role: PropTypes.shape({
        assetPath: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        displayIcon: PropTypes.string.isRequired,
        displayName: PropTypes.string.isRequired,
        uuid: PropTypes.string.isRequired,
      }).isRequired,
      uuid: PropTypes.string.isRequired,
      voiceLine: PropTypes.any,
    })
  ).isRequired,
  getAllData: PropTypes.func.isRequired,
  error: PropTypes.string,
};
