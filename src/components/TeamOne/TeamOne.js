import "./TeamOne.css";
import PropTypes from "prop-types";

const TeamOne = ({ teamOneCharacters, deleteCharacter }) => {
console.log("deleteCharacter:=====", deleteCharacter);

  return (
    <div className='team-one-page'>
      {!teamOneCharacters.length && (
        <h2 className='empty-team-message'>
          There are no saved characters yet, you can add up to 5 characters on a
          team!
        </h2>
      )}
      <div className='team-one-container'>
        {teamOneCharacters.map((teamOneCharacter) => (
          <div className='display-icon-image-card'>
            <div className='team-icon-info'>
              <img
                className='display-icon-image'
                src={teamOneCharacter.displayIconSmall}
                alt={teamOneCharacter.displayName}
              />
              <p className='character-name'>{teamOneCharacter.displayName}</p>
              <p className='character-role'>
                Role: {teamOneCharacter.role.displayName}
              </p>
              <button
                className='delete-button'
                onClick={() => deleteCharacter(teamOneCharacter)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamOne;

TeamOne.propTypes = {
  teamOneCharacters: PropTypes.arrayOf(
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
      characterTags: PropTypes.any,
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
  deleteCharacter: PropTypes.func.isRequired,
};
