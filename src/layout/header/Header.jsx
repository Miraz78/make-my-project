import React from 'react';
import navLogo from "../../assests/images/header/logo@2x.png"
import {Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/" className='navbar-brand'><img src={navLogo} alt="nav-brand is not found" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/flight" className='nav-link'>Flight</Link>
            <Link to="/train" className='nav-link'>Train</Link>
            <Link to="/hotel" className='nav-link'>Hotel</Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">SIGN IN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  );
}

export default Header;