import './Weapons.css'
import {useState, useEffect} from 'react';

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);
  console.log("weapons", weapons)
  const [error, setError] = useState("");

//API fetch call for weapons
const getAllWeapons = () => {
  fetch ("https://valorant-api.com/v1/weapons")
  .then((response) => {
    if (!response.ok) {
      throw new Error (`Sorry, there is an error! status: ${response.status}. Please try again later`);
    }
    return response.json();
  })
  .then((data) => {
    setWeapons(data.data)
  })
  .catch((event) => {
    console.log(event.message);
    setError(event.message)
  })
}

useEffect(() => {
  getAllWeapons();
},[])

return (
  <div className='weapons-container'>
    {error ? (
      <p className='weapons-error-message'>{error}</p>
    ) : weapons.length > 0 ? (
      weapons.map((weapon) => (
  <div className='weapons' key={weapon.uuid}>
      <h2 className='weapons-display-names'>{weapon.displayName}</h2>
      <img className='display-icons' src={weapon.displayIcon} alt={weapon.displayName} /> 
  </div>

      ))
    ) : (
      <p className='no-weapons-message'>There are no weapons available</p>
    )}
  </div>
  )
}

export default Weapons;