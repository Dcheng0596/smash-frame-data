import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';

function Fighter({ ...props }) {
  const [moves, setMoves] = useState(null);
 const [attributes, setAttributes] = useState(null);

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

    
    axios.get("https://api.kuroganehammer.com/api/characters/name/" + fighterName + "/movements?game=" + gameName)
    .then(res => {
      setAttributes(res.data);}
    );

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

  const groundMoves = moves !== null ? (
      moves.map( move => {
        if(move.MoveType == "ground") {   
            return (
              <tr key={move.Name}>
                <td><strong>{move.Name}</strong></td>
                <td>{move.HitboxActive}</td>
                <td>{move.FirstActionableFrame}</td>
                <td>{move.BaseDamage}</td>
                <td>{move.BaseKnockBackSetKnockback}</td>
                <td>{move.KnockbackGrowth}</td>
              </tr>
            )
        }
      })
    )
    : (
       <tr></tr>
    );

    const aerialMoves = moves !== null ? (
        moves.map( move => {
          if(move.MoveType == "aerial") {   
              return (
                <tr key={move.Name}>
                  <td><strong>{move.Name}</strong></td>
                  <td>{move.HitboxActive}</td>
                  <td>{move.FirstActionableFrame}</td>
                  <td>{move.BaseDamage}</td>
                  <td>{move.BaseKnockBackSetKnockback}</td>
                  <td>{move.KnockbackGrowth}</td>
                  <td>{move.LandingLag}</td>
                  <td>{move.Autocancel}</td>
                </tr>
              )
          }
        })
      )
      : (
         <tr></tr>
      );

      const throwMoves = moves !== null ? (
        moves.map( move => {
          if(move.MoveType == "throw") {   
              return (
                <tr key={move.Name}>
                  <td><strong>{move.Name}</strong></td>
                  <td>{move.BaseDamage}</td>
                  <td>{move.Angle}</td>
                  <td>{move.BaseKnockBackSetKnockback}</td>
                  <td>{move.KnockbackGrowth}</td>
                </tr>
              )
          }
        })
      )
      : (
         <tr></tr>
      );
      const specialMoves = moves !== null ? (
        moves.map( move => {
          if(move.MoveType == "special") {   
              return (
                <tr key={move.Name}>
                  <td><strong>{move.Name}</strong></td>
                  <td>{move.HitboxActive}</td>
                  <td>{move.FirstActionableFrame}</td>
                  <td>{move.BaseDamage}</td>
                  <td>{move.BaseKnockBackSetKnockback}</td>
                  <td>{move.KnockbackGrowth}</td>
                </tr>
              )
          }
        })
      )
      : (
         <tr></tr>
      );

      const attr = attributes !== null ? (
        attributes.map( attribute => {
            return (
            <tr key={attribute.Name}>
                <td><strong>{attribute.Name}</strong></td>
                <td>{attribute.Value}</td>
            </tr>
            )
        })
      )
      : (
         <tr></tr>
      );

  return(
    <div className="container fighter ">
      <div className="d-flex flex-wrap justify-content-center">
        <a href="#ground"><button >Ground</button></a>
        <a href="#aerial"><button >Aerial</button></a>
        <a href="#throw"><button >Throw</button></a>
        <a href="#special"><button >Special</button></a>
        <a href="#attribute"><button >Attribute</button></a>
      </div>
      <img className="image-fluid mx-auto d-block"src={filePath} alt={fighterName}/>
      <h1 id="ground" className="text-center" >Ground</h1>
      <Table className="ground" responsive bordered hover>
        <thead>
          <tr>
            <th>Attacks</th>
            <th>Active Frames</th>
            <th>First Actable Frame</th>
            <th>Base Damage</th>
            <th>Base Knockback</th>
            <th>Knockback Growth</th>
          </tr>
        </thead>
        <tbody>
            {groundMoves}
        </tbody>
      </Table>
      <h1 id="aerial" className="text-center" >Aerial</h1>
      <Table className="aerial" responsive bordered hover>
        <thead>
          <tr>
            <th>Attacks</th>
            <th>Active Frames</th>
            <th>First Actable Frame</th>
            <th>Base Damage</th>
            <th>Base Knockback</th>
            <th>Knockback Growth</th>
            <th>Lag</th>
            <th>Autocancel</th>
           </tr>
        </thead>
        <tbody>
          {aerialMoves}
        </tbody>
      </Table>
      <h1 id="throw" className="text-center" >Throw</h1>
      <Table className="throw" responsive bordered hover>
        <thead>
          <tr>
            <th>Attacks</th>
            <th>Base Damage</th>
            <th>Angle</th>
            <th>Base Knockback</th>
            <th>Knockback Growth</th>
           </tr>
        </thead>
        <tbody>
          {throwMoves}
        </tbody>
      </Table>
      <h1 id="special" className="text-center" >Special</h1>
      <Table className="special" responsive bordered hover>
        <thead>
          <tr>
            <th>Attacks</th>
            <th>Active Frames</th>
            <th>First Actable Frame</th>
            <th>Base Damage</th>
            <th>Base Knockback</th>
            <th>Knockback Growth</th>
           </tr>
        </thead>
        <tbody>
          {specialMoves}
        </tbody>
      </Table>
      <h1 id="attribute" className="text-center" >Attribute</h1>
      <Table className="attributes" responsive bordered hover>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {attr}
        </tbody>
      </Table>
    </div>
  );
}

export default Fighter