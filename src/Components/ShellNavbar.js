import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function ShellNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Criss Martin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Skills</Nav.Link>
          <Nav.Link href="#link">Experience</Nav.Link>
          <Nav.Link href="#link">Education</Nav.Link>
          <Nav.Link href="#link">Print</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse>
        <Nav className="ml-auto">
          <Navbar.Text><a href="mailto('w.criss.martin@gmail.com')">w.criss.martin@gmail.com</a> </Navbar.Text>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default ShellNavbar;
