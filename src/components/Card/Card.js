import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ icon, name, role, id }) => {
  return (
    <Link to={`/characterDetails/${id}`} key={id} className="no-underline">
      <div className='card'>
        <img src={icon} className='character-icon-image' />
        <div className='role-name-container'>
          <p className='character-name'>{name}</p>
          <p className='character-role'>{role}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
