import "./Header.css";
import { Link } from "react-router-dom";


const Header = ( { showHomeButton }) => {
  return (
    <div>
      <header>
        <Link to='/'>
          <img src='valorant.png' className='valorant-logo' />
        </Link>
        {showHomeButton && (
          <Link to='/' className="no-underline">
            <button className='home-button'> HOME </button>
          </Link>
        )}
       
      </header>
    </div>
  );
};

export default Header;
