import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Spinner from 'react-bootstrap/Spinner'

// Reduce the number of image imports
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

// Display all fighters icons 
function FighterList() {
  const [fighters, setFighters] = useState(null);
  
  useEffect (() => {
    axios.get("https://api.kuroganehammer.com/api/characters?game=ultimate")
    .then(res => setFighters(res.data));
  }, [])
  
  if(Array.isArray(fighters))
    console.log(fighters);
  const images = importAll(require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/));

  const displayIcons = fighters!==null ? (
    fighters.map(fighter => {
      return (
        <OverlayTrigger
          trigger="hover"
          overlay={
          <Tooltip id={fighter.Name}><strong>{fighter.Name}</strong></Tooltip>
          }
        >
          <img src={images[ fighter.Name +'Icon.png']} alt={fighter.Name} width="110"/>
        </OverlayTrigger>
      )
    })
  ) : (
    <Spinner animation="border" />
  );
  


  return (
    <div className="fighters">
    </div>
  )

}


export default FighterList