import React from 'react'
import './head.css'


function Head(props){

    return (
      <>
        <div className="hd-blck">
          <span id="hbar"></span>
          <p id="heading">{props.head}</p>
        </div>
      </>
    );
}

function Shead(props) {
  return (
    <>
      <div className="shd-blck">
        <span id="shbar"></span>
        <p id="sheading">{props.shead}</p>
      </div>
    </>
  );
}


function XShead(props) {
  return (
    <>
      <div className="xshd-blck">
        <p id="xsheading">{props.xshead}</p>
      </div>
    </>
  );
}



export {Head, Shead, XShead };