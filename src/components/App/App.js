import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import Header from "../Header/Header";
import TeamOne from "../TeamOne/TeamOne";
import TeamTwo from "../TeamTwo/TeamTwo";
import Form from "../Form/Form";
import BadRoute from "../BadRoute/BadRoute";

import { useState, useEffect } from "react";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [teamOneCharacters, setTeamOneCharacters] = useState([]);
  const [teamTwoCharacters, setTeamTwoCharacters] = useState([]);
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
        setCharacters(data.data);
        setAllCharacters(data.data);
      })
      .catch((event) => {
        console.error(event.message);
        setError(event.message);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  const filterCharactersByRole = (role) => {
    if (role === "") {
      setCharacters(allCharacters);
    } else {
      const filteredCharacters = allCharacters.filter(
        (character) => character.role?.displayName === role
      );
      setCharacters(filteredCharacters);
    }
  };

  const addToTeamOne = (characterObject) => {
    setErrorMessage("");
    setConfirmationMessage("Character added successfully!");
    if (
      teamOneCharacters.some((teamOneCharacter) => teamOneCharacter.uuid === characterObject.uuid)) {
      setErrorMessage(
        "This character has already been added to the team. Please select another."
      );
    } else if (teamOneCharacters.length >= 5) {
      setErrorMessage("You can only add a maximum of 5 players to a team.");
    } else {
      setTeamOneCharacters((teamOneCharacters) => [
        ...teamOneCharacters,
        characterObject,
      ]);
    }
  };

  const addToTeamTwo = (characterObject) => {
    setErrorMessage("");
    setConfirmationMessage("Character added successfully!");
    if (
      teamTwoCharacters.some((teamTwoCharacter) => teamTwoCharacter.uuid === characterObject.uuid)) {
      setErrorMessage(
        "This character has already been added to the team. Please select another."
      );
    } else if (teamTwoCharacters.length >= 5) {
      setErrorMessage("You can only add a maximum of 5 players to a team.");
    } else {
      setTeamTwoCharacters((teamTwoCharacters) => [
        ...teamTwoCharacters,
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
              <Form filterRole={filterCharactersByRole} />
              <CharacterContainer
                characters={characters}
                getAllData={getAllData}
                error={error}
                setError={setError}
              />
            </>
          }
        />
        <Route
          path='/characterDetails/:id'
          element={
            <>
              <Header showHomeButton={true} showTeamButton={true} />
              <CharacterDetails
                addToTeamOne={addToTeamOne}
                addToTeamTwo={addToTeamTwo}
                errorMessage={errorMessage}
                confirmationMessage={confirmationMessage}
                setConfirmationMessage={setConfirmationMessage}
                setErrorMessage={setErrorMessage}
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
              <TeamTwo
                teamTwoCharacters={teamTwoCharacters}
                showTeamButton={false}
                deleteCharacter={deleteCharacter}
              />
            </>
          }
        />
        <Route
          path='/*'
          element={
            <BadRoute
              errorRoute={"Oh no agent, you have gone down the wrong path. Find your path to battle again by clicking on the home button!"}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
