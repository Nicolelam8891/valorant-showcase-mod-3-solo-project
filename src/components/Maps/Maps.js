import './Maps.css'
import {useState, useEffect} from "react";


const Maps = () => {
  const [maps, setMaps] = useState([]);
  console.log("maps", maps)
  const [error, setError] = useState("");

  const getAllMaps = () => {
  
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => {
        if (!response.ok) {
          throw new Error (`Sorry, there is an error! status: ${response.status}. Please try again later`);
        }
      return response.json();
    })
    .then((data) => {
      console.log("data", data)
      console.log("data.data", data.data)
      setMaps(data.data)
    })
    .catch((event) => {
      console.error(event.message);
      setError(event.message)
    })
  } 
  
  useEffect(() => {
    getAllMaps();
  }, [])

  //if there is an error, we will display an error message
  //: otherwise, check if the length of maps is > 0, map through the array and display the following
  return (
    <div className='maps-container'>
      {error ? ( 
      <p className='maps-error-message'>{error}</p>
    ) : maps.length > 0 ? (
      maps.map((map) => (
      <div className='maps' key={map.uuid}> 
        <h2 className='maps-display-names'>{map.displayName}</h2>
        <p className='map-description'>{map.narrativeDescription}</p>
        <img className='display-icons' src={map.displayIcon} alt={map.displayName} /> 
        <img className='map-images' src={map.splash} alt={map.displayName} />
        </div>
      ))
      ) : (
    <p className='no-maps-message'>There are no maps available</p>
  )}
    </div>
  )
}

export default Maps;