import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { setUser } from '../state/user';
import { MdInvertColors } from "react-icons/md";


const NavBar = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`Navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar expand="lg" className={`bg-${isDarkMode ? 'dark' : 'light'} text-${isDarkMode ? 'light' : 'dark'}`}>
        <Container>
          <Navbar.Brand href="/">Carbon Copy</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">SignUp</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button onClick={toggleDarkMode} className="btn btn-sm btn-primary"><MdInvertColors />
</button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;