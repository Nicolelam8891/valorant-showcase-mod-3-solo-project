import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ icon, name, role, id }) => {
  return (
    <Link to={`/characterDetails/${id}`} key={id}>
      <div className='card'>
        <img src={icon} className='character-icon-image' />
        <p className='character-name'>{name}</p>
        <p className='character-role'>{role}</p>
      </div>
    </Link>
  );
};

export default Card;
