import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

import wordpressIcon from "../Images/iconfinder_WordPress_345397.png"
import linkedInIcon from "../Images/iconfinder_square-linkedin_317725.png"

function ShellNavbar() {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand as={Link} to="/">Criss Martin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/Experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/PersonalProjects">Personal Projects</Nav.Link>
            <Nav.Link as={Link} to="/Education">Education</Nav.Link>
            <Nav.Link as={Link} to="/Print">Print</Nav.Link>
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
