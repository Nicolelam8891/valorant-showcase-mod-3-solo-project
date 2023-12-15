import "./TeamTwo.css";
import PropTypes from "prop-types";

const TeamTwo = ({ teamTwoCharacters, teamOneCharacters, deleteCharacter }) => {

  return (
    <div className='team-two-page'>
      <h2 className="team-two-heading">Team 2</h2>
      {(!teamTwoCharacters.length && !teamOneCharacters) && (
        <h2 className='empty-team-message'>
          There are no saved characters yet, you can add up to 5 characters on a
          team!
        </h2>
      )}
      <div className='team-two-container'>
        {teamTwoCharacters.map((teamTwoCharacter) => (
          <div className='display-icon-image-card'>
            <div className='team-icon-info'>
              <img
                className='display-icon-image'
                src={teamTwoCharacter.displayIconSmall}
                alt={teamTwoCharacter.displayName}
              />
              <p className='character-name'>{teamTwoCharacter.displayName}</p>
              <p className='character-role'>
                Role: {teamTwoCharacter.role.displayName}
              </p>
              <button
                className='delete-button'
                onClick={() => deleteCharacter(teamTwoCharacter)}
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

export default TeamTwo;

TeamTwo.propTypes = {
  teamTwoCharacters: PropTypes.arrayOf(
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
