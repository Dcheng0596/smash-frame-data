import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from '../assets/logos/logo1.png';

function Nav() {
    return(
      <Navbar>
        <Navbar.Brand>
          <img 
            src={Logo1}
            alt="Smash Stats"
            className="d-inline"
         />
      </Navbar.Brand>
    </Navbar>
    );
}

export default Nav;