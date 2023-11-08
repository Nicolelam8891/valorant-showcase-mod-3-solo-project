import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <header> 
      <Link to='/'>
          <img src="valorant.png" className='valorant-logo'/>
      </Link>
      </header>
  
    </div>
    )
}

export default Header;