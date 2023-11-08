import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import Header from "../Header/Header";
import TeamOne from "../TeamOne/TeamOne";
import { useState } from 'react'


const App = () => {

  const [teamOneCharacters, setTeamOneCharacters] = useState([])

  const addToTeam = ( characterObject ) => {
    if (!teamOneCharacters.some(teamOneCharacter => teamOneCharacter.uuid === characterObject.uuid)) {
      setTeamOneCharacters([...teamOneCharacters, characterObject])
    }
  }

  return (
    <Router>
      <main className='App'></main>
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
              <TeamOne teamOneCharacters={teamOneCharacters}/>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
