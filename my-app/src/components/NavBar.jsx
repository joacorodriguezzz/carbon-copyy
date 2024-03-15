import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { MdInvertColors } from "react-icons/md";

const NavBar = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`Navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar expand="lg" className={`bg-${isDarkMode ? "dark" : "light"}`}>
        <Container>
          <Navbar.Brand
            href="/"
            className={`text-${isDarkMode ? "light" : "dark"}`}
          >
            Carbon Copy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/login"
                className={`text-${isDarkMode ? "light" : "dark"}`}
              >
                Login
              </Nav.Link>
              <Nav.Link
                href="/register"
                className={`text-${isDarkMode ? "light" : "dark"}`}
              >
                SignUp
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <button onClick={toggleDarkMode} className="btn btn-sm btn-primary ">
            <MdInvertColors />
          </button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
