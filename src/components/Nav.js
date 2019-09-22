import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Logo1 from '../assets/logos/logo1.png';
import Logo2 from '../assets/logos/logo2.png';

function Nav() {
    return(
      <Navbar>
        <Navbar.Brand>
          <img 
            src={Logo1}
            alt="Smash Stats"
            className="d-none d-md-block"
         />
         <img 
            src={Logo2}
            alt="Smash Stats"
            className="d-md-none"
         />
      </Navbar.Brand>
    </Navbar>
    );
}

export default Nav;