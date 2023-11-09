import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import Header from "../Header/Header";
import TeamOne from "../TeamOne/TeamOne";
import Form from "../Form/Form";
import { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [teamOneCharacters, setTeamOneCharacters] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  


  const addToTeam = (characterObject) => {
    setErrorMessage(""); //this will reset the error message each time a user tries to add a character.
    setConfirmationMessage("Character added successfully!");
    if (
      teamOneCharacters.some(
        (teamOneCharacter) => teamOneCharacter.uuid === characterObject.uuid
      )
    ) {
      setErrorMessage(
        "This character has already been added to the team. Please select another."
      );
    } else if (teamOneCharacters.length >= 5) {
      setErrorMessage("You can only add a maximum of 5 players to a team.");
    } else {
      // Add the character to the team if it's not full and the character isn't already added
      setTeamOneCharacters((teamOneCharacters) => [
        ...teamOneCharacters,
        characterObject,
      ]);
    }
  };

  const deleteCharacter = (characterObject) => {
    const filteredCharacters = teamOneCharacters.filter(
      (teamOneCharacter) => teamOneCharacter.uuid !== characterObject.uuid
    );
    setTeamOneCharacters(filteredCharacters);
  };

  return (
    <Router>
      <main className='App'></main>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header showHomeButton={false} showTeamButton={true} />
              <Form characters={characters}/>
              <CharacterContainer characters={characters} getAllData={getAllData} error={error} setError={setError}/>
            </>
          }
        />
        <Route
          path='/characterDetails/:id'
          element={
            <>
              <Header showHomeButton={true} showTeamButton={true} />
              <CharacterDetails
                addToTeam={addToTeam}
                errorMessage={errorMessage}
                confirmationMessage={confirmationMessage}
              />
            </>
          }
        />
        <Route
          path='/team'
          element={
            <>
              <Header showHomeButton={true} showTeamButton={false} />
              <TeamOne
                teamOneCharacters={teamOneCharacters}
                showTeamButton={false}
                deleteCharacter={deleteCharacter}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
