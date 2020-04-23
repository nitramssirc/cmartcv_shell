import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import wordpressIcon from "../Images/iconfinder_WordPress_345397.png"
import linkedInIcon from "../Images/iconfinder_square-linkedin_317725.png"

function ShellNavbar() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home">Criss Martin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#personal_projects">Personal Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#print">Print</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <Nav className="ml-auto">
            <Navbar.Text>
              <a href="mailto('w.criss.martin@gmail.com')">
                w.criss.martin@gmail.com
              </a>
              <a href="https://cmartcoding.com/" target="_blank" rel="noopener noreferrer"><img src={wordpressIcon} alt="Blog"/></a>
              <a href="https://www.linkedin.com/in/crissmartin/" target="_blank" rel="noopener noreferrer"><img src={linkedInIcon} alt="LinkedIn"/></a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default ShellNavbar;
