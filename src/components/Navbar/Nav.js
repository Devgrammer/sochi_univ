import React, { Fragment } from "react";
import { Nav, Navbar, NavDropdown, Media } from "react-bootstrap";
import "./nav.css";

function NavBar() {
  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="custom_nav"
        fixed="top"
        variant="dark"
      >
        <Navbar.Brand href="#home" className="navbar-brand">
          <Media className="nav-logo">
            <img
              width={24}
              height={24}
              className="mr-3"
              src="./sutr_logo.png"
              alt="Generic placeholder"
            />
            <Media.Body className="nmed-bdy">
              <div className="logo-cont">
                <p id="fac">SOCIO-PEDAGOGICAL FACULTY</p>
                <p id="uni">SOCHI STATE UNIVERSITY</p>
              </div>
            </Media.Body>
          </Media>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="Navbar-button">
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
    </Fragment>
  );
}

export default NavBar;
