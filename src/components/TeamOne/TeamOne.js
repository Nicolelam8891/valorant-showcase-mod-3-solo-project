import "./TeamOne.css";

const TeamOne = ({ teamOneCharacters, deleteCharacter }) => {
  console.log("teamOneCharacters:=====", teamOneCharacters);

  return (
    <div className="team-one-page">
      <div className='line'></div>
      <div className='team-one-container'>
          {teamOneCharacters.map((teamOneCharacter) => (
        <div className='display-icon-image-card'>
            <div className='team-icon-info' key={teamOneCharacter.uuid}>
              <img
                className='display-icon-image'
                src={teamOneCharacter.displayIconSmall}
                alt={teamOneCharacter.displayName}
              />
              <p className='character-name'>{teamOneCharacter.displayName}</p>
              <button className="delete-button" onClick={() => deleteCharacter(teamOneCharacter)}>❌</button> 
            </div>
        </div>
          ))}
      </div>
    </div>
  );
};

export default TeamOne;
