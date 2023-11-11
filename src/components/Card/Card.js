import "./Card.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Card = ({ icon, name, role, id }) => {

  return (
    <Link to={`/characterDetails/${id}`} className="no-underline card-button">
      <div className='card'>
        <img src={icon} className='character-icon-image' />
        <div className='role-name-container'>
          <p className='character-name'>{name}</p>
          <p className='character-role'>Role: {role}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};