import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { setUser } from '../state/user';
const NavBar = ({ user }) => {
  return (
    // <>
    //   {user.email ? (
        <Navbar expand="lg" className="bg-light text-light">
          <Container>
            <Navbar.Brand href="/">Carbon Copy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">SignUp</Nav.Link>
                <Nav.Link href="/favoritesList">Favoritos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    //   ) : (
    //     <Navbar expand="lg" className="bg-light text-light">
    //       <Container>
    //         <Navbar.Brand href="/">Carbon Copy</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="me-auto">
    //             <Nav.Link href="/login">Login</Nav.Link>
    //             <Nav.Link href="/register">SignUp</Nav.Link>
    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
    //   )}
    // </>
  );
};

export default NavBar;
