import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import Header from "../Header/Header";
import TeamOne from "../TeamOne/TeamOne";
import { useState } from "react";

const App = () => {
  const [teamOneCharacters, setTeamOneCharacters] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addToTeam = (characterObject) => {
    setErrorMessage(""); //this will reset the error message each time a user tries to add a character.

      if (teamOneCharacters.some(teamOneCharacter => teamOneCharacter.uuid === characterObject.uuid)) {
        setErrorMessage("This character has already been added to the team. Please select another.");
      } else if (teamOneCharacters.length >= 5) {
        setErrorMessage("You can only add a maximum of 5 players to a team.");
      } else {
        // Add the character to the team if it's not full and the character isn't already added
        setTeamOneCharacters(teamOneCharacters => [...teamOneCharacters, characterObject]);
      }
    };
  
    const deleteCharacter = (characterObject) => {
      const filteredCharacters = teamOneCharacters.filter(
        (teamOneCharacter) => teamOneCharacter.uuid !== characterObject.uuid);
          setTeamOneCharacters(filteredCharacters)
        };
      
  
  return (
    <Router>
      <main className='App'></main>
      {errorMessage && <div className='team-error-message'>{errorMessage}</div>}
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header showHomeButton={false} showTeamButton={true} />
              <CharacterContainer />
            </>
          }
        />
        <Route
          path='/characterDetails/:id'
          element={
            <>
              <Header showHomeButton={true} showTeamButton={true} />
              <CharacterDetails addToTeam={addToTeam} />
            </>
          }
        />
        <Route
          path='/team'
          element={
            <>
              <Header showHomeButton={true} showTeamButton={false} />
              <TeamOne teamOneCharacters={teamOneCharacters} showTeamButton={false} deleteCharacter={deleteCharacter}/>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
