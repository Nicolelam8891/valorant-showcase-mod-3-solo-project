import "./App.css";
import CharacterContainer from "../CharacterContainer/CharacterContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterDetails from "../CharacterDetails/CharacterDetails";
import Header from "../Header/Header";

const App = () => {
  return (
    <Router>
      <main className='App'>
        <Header />
      </main>

      <Routes>
        <Route path='/' element={<CharacterContainer />} />
        <Route
          path='/characterDetails/:id'
          element={<CharacterDetails />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
