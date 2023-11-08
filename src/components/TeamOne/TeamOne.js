import "./TeamOne.css";

const TeamOne = ( { teamOneCharacters } ) => {
  console.log("teamOneCharacters:=====", teamOneCharacters);
  

  return (
    <div className="team-one-container">
      <div className='line'></div>
      <div className="display-icon-image-container">
          {teamOneCharacters.map((teamOneCharacter) => (
          <div key={teamOneCharacter.uuid}> 
            <img 
              className='display-icon-image'
              src={teamOneCharacter.displayIconSmall}
              alt={teamOneCharacter.displayName}
            />
            </div>
          ))}
      </div>
    </div>
  );
};

export default TeamOne

