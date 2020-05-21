import React, { Fragment } from "react";
import {Shead, XShead} from '../Heading/head'
import { Image, Button, Media } from "react-bootstrap";
import  Crd_Img from '../img/crd.jpg'
import Psix from "../img/logo_psix.jpg";
import Tip from "../img/logotip.jpg";
import Sirius from "../img/sirius1.jpg";
import Sveta from "../img/sveta_6.jpg";
import Sutr from "../img/sutr_logo2.jpg";

import  './card.css'

function Card1() {
    return (
      <Fragment>
        <div className="card-blck">
          <div id="sheading">
            <Shead shead={"ENTRANTS SPF 2019-2020"} />
          </div>
          <div className="crd-img">
            <Image src={Crd_Img} alt=" " fluid />
          </div>
          <div id="crd-cont">
            <p id="crd-txt">
              A budgetary enrollment has been announced at the secondary
              education faculty for undergraduate and graduate programs for the
              following profiles and areas of study at the social and
              pedagogical faculty of FSBEI HE "SSU" ...
            </p>
            <Button variant="primary" size="sm" className="crd-btn ">
              Read More
            </Button>
          </div>
        </div>
      </Fragment>
    );
}

function Card2() {
  return (
    <Fragment>
      <div className="card-blck">
        <div id="sheading">
          <Shead shead={"SPF IMPLEMENTED PROJECTS SPF"} />
        </div>
        <hr id="shr"></hr>
        <div id="crd-list">
          <ul className="list-unstyled">
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src={Psix}
                alt="Generic placeholder"
              />
              <Media.Body>
                <XShead xshead={"All-Russian Conference "} />
                <p id="list-cont">
                  All-Russian Conference "Druzhininsky Readings"
                </p>
              </Media.Body>
            </Media>
            <hr></hr>
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src={Tip}
                alt="Generic placeholder"
              />
              <Media.Body>
                <XShead xshead={"All-Russian Olympiad "} />
                <p id="list-cont">
                  All-Russian Olympiad of students in speech therapy
                </p>
              </Media.Body>
            </Media>
            <hr></hr>

            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src={Sirius}
                alt="Generic placeholder"
              />
              <Media.Body>
                <XShead xshead={"Project SPF FSBEI HE SSU"} />
                <p id="list-cont">
                  Project SPF FSBEI HE "SSU" in conjunction with the Foundation
                  "Talent and Success" (Retraining program "Big Challenges")
                </p>
              </Media.Body>
            </Media>
          </ul>
          <Button variant="primary" size="sm" className="list-btn ">
           More Details
          </Button>
        </div>
      </div>
    </Fragment>
  );
}


function Card3() {
  return (
    <Fragment>
      <div className="card-blck">
        <div id="sheading">
          <Shead shead={"ACTUAL PROJECTS OF SPF"} />
        </div>
        <hr id="shr"></hr>
        <div id="crd-list">
          <ul className="list-unstyled">
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src={Sveta}
                alt="Generic placeholder"
              />
              <Media.Body>
                <XShead xshead={" Federal educational project "} />
                <p id="list-cont">
                  Federal educational project, including programs aimed at
                  students of educational schools "Useful Holidays"
                </p>
              </Media.Body>
            </Media>
            <hr></hr>
            <Media as="li">
              <img
                width={64}
                height={64}
                className="mr-3"
                src={Sutr}
                alt="Generic placeholder"
              />
              <Media.Body>
                <XShead xshead={"School counselors "} />
                <p id="list-cont">
                  "School counselors" - a project SPF FSBEI HE "SSU" together
                  with the Administration of Sochi
                </p>
              </Media.Body>
            </Media>
          </ul>
          <Button variant="primary" size="sm" className="list-btn ">
            More Details
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export {Card1, Card2, Card3};
