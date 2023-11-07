import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      
      <main className='App'>
        <h1>Valorant</h1>
        <CharacterContainer />
      </main>
    </Router>
  );
};

export default App;
