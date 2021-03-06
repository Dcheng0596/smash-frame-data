import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Spinner from 'react-bootstrap/Spinner'
import { Link} from 'react-router-dom'
import { GameContext } from '../contexts/GameContext';

// Reduce the number of image imports
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

// Display all fighters icons 
function FighterList({ filter }) {
  const [fighters, setFighters] = useState(null);
  const { game } = useContext(GameContext);
  let displayIcons;

  useEffect (() => {
   axios.get("https://api.kuroganehammer.com/api/characters?game=" + game.replace(/\s/g, ''))
   .then(res => setFighters(res.data));
   
  }, [game])
  
  const images = importAll(require.context('../assets/icons', false, /\.(png|jpe?g|svg)$/));

  // Filters fighters based on filter string creates an array of JSX of each filtered fighter
  // Shows spinner if fighters haven't been fetched
  if(fighters !== null) {
    let filteredFighters = fighters;
    if(filter !== '' ) {
      filteredFighters = filteredFighters.filter( fighter => {
        return fighter.DisplayName.toLowerCase().includes(filter.toLowerCase());
      });
    }
    displayIcons = filteredFighters.map(fighter => {
      return (
       <OverlayTrigger
          key={fighter.OwnerId}
          trigger="hover"
          overlay={
          <Tooltip id={fighter.Name}><strong>{fighter.DisplayName}</strong></Tooltip>
          }
        >
          <Link to={'/' + game.replace(/\s/g, '') + '/' + fighter.Name}>
            <img key={fighter.OwnerId} src={images[fighter.Name.replace(/\s/g, '') +'.png']} 
                 alt={fighter.DisplayName} width="110" height="110"/>
          </Link>
       </OverlayTrigger>
      )
    })
  }
  else {
    displayIcons = <Spinner animation="border" />
  }

  return (
    <div className="fighters d-flex justify-content-center flex-wrap">
       {displayIcons}
    </div>
  )

}


export default FighterList