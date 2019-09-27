import React, { useState, useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo1 from '../assets/logos/logo1.png';
import Logo2 from '../assets/logos/logo2.png';
import { Link} from 'react-router-dom'
import { GameContext } from '../contexts/GameContext';


function Header() {
    const { game, setGame } = useContext(GameContext)
    
    return(
      <Navbar>
        <Navbar.Brand  className="mr-auto">
          <Link to='/'>
            <img
              src={Logo1}
              alt="Smash Stats"
              className="d-none d-md-block"
            />
          </Link>
          <Link to='/'>
            <img
              src={Logo2}
              alt="Smash Stats"
              className="d-md-none"
            />
          </Link>
        </Navbar.Brand>
        <Nav variant="pills" defaultActiveKey="Ultimate">
          <Nav.Item >
            <Nav.Link eventKey="Ultimate" onSelect={ (selected) => {setGame(selected)}}><strong>Ultimate</strong></Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link eventKey="Smash 4" onSelect={ (selected) => {setGame(selected)}}><strong>Smash 4</strong></Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
}

export default Header;