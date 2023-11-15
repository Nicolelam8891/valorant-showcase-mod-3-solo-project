import React from "react";
import './Error.css'
import { Link } from "react-router-dom";

function Error( {error, message } ) {

  return (
    <div className='error'>
      <Link to='/' className='error-home-button no-underline'>
      <button className='nonsense-home-button'> HOME </button>
      </Link>
      <img className='error-nonsense-image' alt='valorant team' src='https://cdn.vox-cdn.com/thumbor/wXT1cC7FbgOVM5TQ2WUjolI38Ik=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69376580/VALORANT_YR1_KeyArt_4k_3_.0.jpg' /> 
      <h1 className="error-message-nonsense">ERROR</h1>
      {error && <h3 className='error-nonsense'>{error} </h3>}
      <p className="bad-route-message">{message}</p>
    </div>
  );
}

export default Error;

