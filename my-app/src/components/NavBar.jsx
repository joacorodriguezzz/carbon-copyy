import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { setUser } from '../state/reducerUser';
import { MdInvertColors } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';


const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const email = localStorage.getItem('email');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();


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
              {!user.email ? (
                <Nav className="me-auto">
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/register">SignUp</Nav.Link>
                </Nav>
              ) : (
                <button onClick={() => dispatch(setUser({ email: null }))} className="btn btn-sm btn-primary">Logout</button>
              )}
          </Navbar.Collapse>
          <button onClick={toggleDarkMode} className="btn btn-sm btn-primary"><MdInvertColors />
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;