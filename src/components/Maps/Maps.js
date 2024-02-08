import './Maps.css'
import {useState, useEffect} from "react";


const Maps = () => {
  const [maps, setMaps] = useState([]);
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
}

export default Maps;