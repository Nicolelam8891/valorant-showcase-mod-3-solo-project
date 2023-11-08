import "./TeamOne.css";

const TeamOne = ({ teamOneCharacters }) => {
  console.log("teamOneCharacters:=====", teamOneCharacters);

  return (
    <div className="team-one-page">
      <div className='line'></div>
      <div className='team-one-container'>
        <div className='display-icon-image-card'>
          {teamOneCharacters.map((teamOneCharacter) => (
            <div className='team-icon-info' key={teamOneCharacter.uuid}>
              <img
                className='display-icon-image'
                src={teamOneCharacter.displayIconSmall}
                alt={teamOneCharacter.displayName}
              />
              <p className='character-name'>{teamOneCharacter.displayName}</p>
              <button className="delete-button">❌</button> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamOne;
