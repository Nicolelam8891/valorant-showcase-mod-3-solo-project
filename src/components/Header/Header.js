import "./Header.css";
import { Link } from "react-router-dom";


const Header = ( { showHomeButton }) => {
  return (
    <div>
      <header>
        <Link to='/'>
          <img src='valorant.png' className='valorant-logo' />
        </Link>
      <div className="button-container">
        {showHomeButton && (
          <Link to='/' className="no-underline">
            <button className='home-button'> HOME </button>
          </Link>
        )}
       <Link to='/team' className="no-underline">
            <button className='team-button'> TEAM </button>
          </Link>
          </div>
      </header>
    </div>
  );
};

export default Header;
