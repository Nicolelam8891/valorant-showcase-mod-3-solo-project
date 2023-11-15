import React from "react";
import './BadRoute.css';
import { Link } from "react-router-dom";

function BadRoute({ errorRoute, messageRoute }) { // Added messageRoute as a parameter, assuming you need it
  return (
    <div className="error-bad-route-container">
      <Link to="/" className="error-home-button no-underline">
        <button className="nonsense-home-button"> HOME </button>
      </Link>
      <img className="error-nonsense-image" alt="valorant team" src="https://cdn.vox-cdn.com/thumbor/wXT1cC7FbgOVM5TQ2WUjolI38Ik=/0x0:3840x2160/1200x800/filters:focal(1613x773:2227x1387)/cdn.vox-cdn.com/uploads/chorus_image/image/69376580/VALORANT_YR1_KeyArt_4k_3_.0.jpg" />
      <h1 className="error-message-nonsense">ERROR</h1>
      {errorRoute && <h3 className="error-nonsense">{errorRoute}</h3>}
      <p className="bad-route-message">{messageRoute}</p> {/* messageRoute is used here, ensure it's passed as a prop */}
    </div>
  );
}

export default BadRoute;
