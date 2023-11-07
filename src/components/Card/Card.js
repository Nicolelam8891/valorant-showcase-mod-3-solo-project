import "./Card.css";

const Card = ({ icon, name, role, uuid }) => {
  return (
    <div className='card'>
      <img src ={icon} className="character-icon-image"/>
      <p className="character-name">{name}</p>
      <p className="character-role">{role}</p>
    </div>
  );
};


export default Card;
