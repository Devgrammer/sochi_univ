import React from 'react'
import faculty from '../img/faculty.jpg'
import {Image} from 'react-bootstrap'
import './about.css';
import { Shead } from "../Heading/head";


function FacultyPic(){
    return (
      <>
        <div className="img-block">
          <div className="bar">
            <span id="hor"></span>
            <span id="ver"></span>
          </div>
          <div className="abt-img">
            <Image src={faculty} alt=" " fluid />
          </div>
        </div>
      </>
    );
}

function FacultyCont() {
  return (
    <>
      <div className="abtc-blck">
        <Shead shead={"ABOUT FACULTY"} />
        <div id="text-content">
          <p id="content">
            The social and pedagogical faculty is one of the largest faculties
            of SSU. The educational process is conducted by 10 doctors of
            sciences (with their own scientific schools) and more than 40
            candidates of science. In the process of training, students master
            fundamental knowledge and gain skills in the practical
            implementation of the knowledge gained. Among the students of the
            SPF are winners and prize-winners of national and international
            competitions in various subjects (for example, in mathematics
            (Ariel, Israel), in computer science (Yoshkar-Ola), in speech
            therapy (Sochi, Moscow), etc.) .
          </p>
        </div>
      </div>
    </>
  );
}

export  {FacultyPic, FacultyCont};