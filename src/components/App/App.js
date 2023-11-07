import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";

const App = () => {
  return (
    <Router>
      <main className='App'>
        <h1>Valorant</h1>
        <CharacterContainer />
      </main>

      <Routes>
        <Route
          path='/characterDetails/:id'
          element={<CharacterDetails />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
