import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

function Fighter({ ...props }) {
  const [moves, setMoves] = useState(null);


  const fighterName = props.match.params.fighter;
  const gameName = props.match.params.game;
  const filePath = require("../assets/fighters/" + fighterName + ".png");
  const white = "#fafafa"
  const black = "#141414"

  useEffect(() => {
    let fighterColor;
    axios.get("https://api.kuroganehammer.com/api/characters/name/" + fighterName)
   .then(res => {
      fighterColor = res.data.ColorTheme;
      document.body.style.background = "linear-gradient( to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 17%, " 
        + white + " 17%, " + white + " 35%, rgba(0, 0, 0, 0) 35% ), linear-gradient( to top, " 
        + fighterColor + ", " + fighterColor + " 30%, " + white + " 30%, " + white + " 40%, " + fighterColor + " 40% )";
    });

    
    axios.get("https://api.kuroganehammer.com/api/characters/name/" + fighterName + "/moves?game=" + gameName)
    .then(res => {
      setMoves(res.data);}
    );

    return function cleanup() {
        document.body.style.background = "linear-gradient( to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 17%, " 
        + white + " 17%, " + white + " 35%, rgba(0, 0, 0, 0) 35% ), linear-gradient( to top, " 
        + black + ", " + black + " 30%, " + white + " 30%, " + white + " 40%, " + black + " 40% )";
      };

  }, [])

  const moveTable = moves !== null ? (
      moves.map( move => {
        if(move.MoveType == "ground") {
            console.log("equal");
            
            return (
              <tr key={move.Name}>
                <td><strong>{move.Name}</strong></td>
                <td>{move.HitboxActive}</td>
                <td>{move.FirstActionableFrame}</td>
                <td>{move.BaseDamage}</td>
                <td>{move.Angle}</td>
                <td>{move.BaseKnockBackSetKnockback}</td>
                <td>{move.KnockbackGrowth}</td>
              </tr>
            )
        }
        else {
          console.log("notEqual");
          
        }
      })
    )
    : (
       <tr></tr>
    );

  return(
    <div className="container fighter ">
      <img className="image-fluid mx-auto d-block"src={filePath} alt={fighterName}/>
      <Table responsive bordered hover>
        <thead>
            <tr>
            <th>Attacks</th>
            <th>Active Frames</th>
            <th>First Actable Frame</th>
            <th>Base Damage</th>
            <th>Angle</th>
            <th>Base Knockback</th>
            <th>Knockback Growth</th>
            </tr>
        </thead>
        <tbody>
            {moveTable}
        </tbody>
      </Table>
    </div>
  );
}

export default Fighter