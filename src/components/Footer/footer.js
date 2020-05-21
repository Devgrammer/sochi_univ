import React, { Fragment } from 'react'
import {Col, Row,  Media } from "react-bootstrap";
import './footer.css'

export default function footer() {
    return (
      <Fragment>
        <div className="footer-blck">
          <Row>
            <Media className="logo-blck">
              <img
                width={24}
                height={24}
                className="mr-3"
                src="./sutr_logo.png"
                alt="Generic placeholder"
              />
              <Media.Body className="med-bdy">
                <div className="logo-cont">
                  <p id="fac">SOCIO PEDAGOGICAL FACULTY</p>
                  <p id="uni">SOCHI STATE UNIVERSITY</p>
                </div>
              </Media.Body>
            </Media>
          </Row>
          <Row className="list-row">
            <Col>
              <ul id="ul-blck" type="none">
                <li>
                  <a href="# ">
                    <p id="li-cont">
                      <b>Contacts</b>
                    </p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Russian Federation, 354000</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Sochi, st. Plastunskaya, 94</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Phone: 8 (862) 268-31-05</p>
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul id="ul-blck" type="none">
                <li>
                    <p id="li-cont"><b>Activities</b></p>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Faculty Business Reputation</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Educational Activity</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Scientific Activity</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Sport Activity</p>
                  </a>
                </li>
              </ul>
            </Col>
            <Col>
              <ul id="ul-blck" type="none">
                <li>
                  <p id="li-cont">
                    <b>Programs</b>
                  </p>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Undergraduate Directions</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Master's Directions</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Specialty Directions</p>
                  </a>
                </li>
                <li>
                  <a href="# ">
                    <p id="li-cont">Postgraduate Directions</p>
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
}
