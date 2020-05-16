import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import NavBar from './components/Navbar/Nav';
import HeroSection from './components/HeroSection/hero';
import { ProgTab1, ProgTab2, ProgTab3, ProgTab4 } from "./components/Program/progtab";
import { FacultyPic, FacultyCont } from "./components/About/about";
import {Head} from './components/Heading/head'
function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <HeroSection />
        </Row>
        <Row>
          <div className="sub-head">
            <Head head={"SOCIO PEDAGOGICAL FACULTY"} />
          </div>
        </Row>
        <Row>
          <Col md={6}>
            <FacultyPic />
          </Col>
          <Col md={6}>
            <FacultyCont />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="pro-head">
              <Head head={"PROGRAM"} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <Row><ProgTab1 /></Row>
          <Row><ProgTab2 /></Row>
          <Row><ProgTab3 /></Row>
          <Row><ProgTab4 /></Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
        };
       

export default App;
