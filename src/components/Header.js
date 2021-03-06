import React from "react";
import Resume from "../assets/kelly_thompson_resume.pdf";
import "../assets/css/Header.css";

function Header() {
  return (
    <div className="container" id="background">
      <div className="row" id="name-row">
        <h3 className="center-align" id="name">Kelly Thompson</h3>
      </div>
      <div className="row center-align">
        <div className="col s12 m4">
          <h6>email: <a href="mailto:ksthompson48@gmail.com">ksthompson48@gmail.com</a></h6>
        </div>
        <div className="col s12 m4">
          <h5 id="tagline">-Web Developer-</h5>
        </div>
        <div className="col s12 m4">
          <h6>phone: (785) 550-9520</h6>
        </div>
      </div>
      <div className="row center-align">
        <div className="col s12 m4 links">
          <a href={Resume} target="_blank" rel="noreferrer noopener">Resume</a>
        </div>
        <div className="col s12 m4 links">
          <a href="https://github.com/kelstho" target="_blank" rel="noreferrer noopener">Github</a>
        </div>
        <div className="col s12 m4 links">
          <a href="https://www.linkedin.com/in/kelly-thompson-5424541a1/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default Header;