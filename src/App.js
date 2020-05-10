import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import './App.css';
import NavBar from './components/Nav';
import HeroSection from './components/hero';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row >
            <HeroSection />
        </Row>
      </Container>
    </>
  );
        };
       

export default App;
