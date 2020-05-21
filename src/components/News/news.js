import React, {Fragment} from 'react'
import { Shead, XShead } from "../Heading/head";
import { Button, Media } from "react-bootstrap";
import './news.css';
function News() {
    return (
      <Fragment>
        <div className="news-blck">
          <div id="sheading">
            <Shead shead={"NEWS"} />
          </div>
          <hr id="shr"></hr>
          <div id="crd-list">
            <ul className="list-unstyled">
              <Media as="li">
                <Media.Body>
                  <p id="date">December 31, 2018</p>

                  <div id="news-body">
                    <a href="/# ">
                      <XShead
                        xshead={
                          " Federal educational project, including programs aimed at secondary school students "
                        }
                      />
                    </a>
                    <p id="news-cont">
                      Project "Useful Holidays". In order to create conditions
                      for the creative development of gifted children, as well
                      as to increase the effectiveness of interaction between
                      educational organizations of general and higher education
                      (letter of the Ministry of Education and Science of the
                      Russian Federation dated 03.10.2017 No. VP-1238/18 “On
                      Project Implementation”) on the basis of the Social and
                      Pedagogical Faculty of FSBEI of HE “ Sochi State
                      University ”, from May to December 2018, an educational
                      project is being implemented, which includes programs
                      aimed at students in secondary schools in Sochi:
                      <br />
                      <a href="/# ">Read more</a>
                    </p>
                  </div>
                </Media.Body>
              </Media>
              <hr id="news"></hr>

              <Media as="li">
                <Media.Body>
                  <p id="date">April 25, 2018</p>

                  <div id="news-body">
                    <a href="/# ">
                      <XShead
                        xshead={
                          " All-Russian Olympiad of students in speech therapy "
                        }
                      />
                    </a>
                    <p id="news-cont">
                      1. The official website of the All-Russian Olympiad of
                      students in speech therapy. 2. List of participating
                      universities ...
                      <br />
                      <a href="/# ">Read more</a>
                    </p>
                  </div>
                </Media.Body>
              </Media>
              <hr id="news"></hr>

              <Media as="li">
                <Media.Body>
                  <p id="date">May 25, 2018</p>

                  <div id="news-body">
                    <a href="/# ">
                      <XShead
                        xshead={" All-Russian traditional Druzhinin readings "}
                      />
                    </a>
                    <p id="news-cont">
                      On May 25 and 26, 2018, the XVII All-Russian Scientific
                      and Practical Conference with International Participation
                      “Druzhininsky Readings-2018” was held at the supporting
                      university of the Krasnodar Territory, Sochi State
                      University. This annual event in the scientific life of
                      the university is dedicated to the memory of the
                      outstanding Russian psychologist V.N. Druzhinina. The
                      organizer is the Department of General Psychology and
                      Social Communications of the Social and Pedagogical
                      Faculty of SSU ...
                      <br />
                      <a href="/# ">Read more</a>
                    </p>
                  </div>
                </Media.Body>
              </Media>
              <hr id="news"></hr>

              <Media as="li">
                <Media.Body>
                  <p id="date">January 1, 2012</p>

                  <div id="news-body">
                    <a href="/# ">
                      <XShead
                        xshead={
                          " Administration of the SPF SSU website - Ivanova Svetlana (SSC Moscow State University named after MV Lomonosov, Moscow), Dmitry Bebeshko (SSU, Sochi)"
                        }
                      />
                    </a>
                    <p id="news-cont">
                      A fifth grader from Sochi is the youngest programmer in
                      Russia. Achievement recorded in the book of records of the
                      country ...
                      <br />
                      <a href="/# ">Read more</a>
                    </p>
                  </div>
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

export default News;
