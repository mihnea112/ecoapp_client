import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbarr() {
  return (
    <>
      <Navbar variant="dark">
        <Navbar.Brand href="#home">EcoApp</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/model">Model</Nav.Link>
          <Nav.Link href="/test">Test</Nav.Link>
          <Nav.Link href="/keys">Keys</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
export default Navbarr;
