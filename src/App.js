import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import NavBar from './components/Navbar/Nav';
import HeroSection from './components/HeroSection/hero';
import { ProgTab1, ProgTab2, ProgTab3, ProgTab4 } from "./components/Program/progtab";
import { FacultyPic, FacultyCont } from "./components/About/about";
import {Head} from './components/Heading/head'
import  {Card1, Card2, Card3}  from "./components/Card/card";
import News from "./components/News/news";
import Footer from "./components/Footer/footer";
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
        <Row className=" justify-content-center">
          <div className="sub-head">
            <Head head={"SOCIO-PEDAGOGICAL FACULTY"} />
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
            <Row>
              <div className="pro1-head">
                <Head head={"PROGRAM"} />
              </div>
            </Row>
          </Col>
          <Col>
            <Row className=" justify-content-center">
              <div className="pro2-head">
                <Head head={"UPDATES"} />
              </div>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Row>
              p
              <ProgTab1 />
            </Row>
            <Row>
              <ProgTab2 />
            </Row>
            <Row>
              <ProgTab3 />
            </Row>
            <Row>
              <ProgTab4 />
            </Row>
          </Col>

          <Col md={6}>
            <Row>
              <Card1 />
            </Row>
            <Row>
              <Card2 />
            </Row>
            <Row>
              <Card3 />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row className=" justify-content-center">
              <div className="pro2-head">
                <Head head={"NEWS"} />
              </div>
            </Row>
            <News />
          </Col>
        </Row>
        <Row fluid>
          <Footer />
        </Row>
      </Container>
    </>
  );
        };
       

export default App;
