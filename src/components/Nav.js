import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./nav.css";

function NavBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom_nav"
        fixed="top"
        variant="dark"
      >
        <Navbar.Brand href="#home">
          <img src="./sutr_logo.png" width="30" height="30" alt="" />
          <div className="logo_block">
            <p id="lh1">SOCIO-PEDAGOGICAL FACULTY</p>
            <br />
            <p id="lh2">SOCHI STATE UNIVERSITY</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Reputation</Nav.Link>
            <NavDropdown title="Activities" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Education Activities
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Scientific Activities
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Sport Activities
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Social Work</Nav.Link>
            <Nav.Link href="#pricing">Training</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
