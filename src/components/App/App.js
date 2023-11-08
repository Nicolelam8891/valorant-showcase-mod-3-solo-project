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
        <Route path='/' element={
        <>
        <Header showHomeButton={false} /> {/* Hide button on home page */}
        <CharacterContainer />
      </>
        }/>
        <Route
          path='/characterDetails/:id'
          element={
            <>
            <Header showHomeButton={true} /> {/* Show button on character details page */}
            <CharacterDetails />
          </>
          }/>
      </Routes>
    </Router>
  );
};

export default App;
