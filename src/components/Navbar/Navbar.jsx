import React from "react";

function Navbar() {
  return (
    <>
      <div id="home" className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-sec1">
            <p className="navbar-portfolio"> Portfolio</p>{" "}
          </div>
          <div className="navbar-sec2">
           
            <a href="#About">
             
              <p className="nav-edu"> About</p>
            </a>
            <a href="#Skills">
             
              <p className="nav-edu"> Skills </p>
            </a>
            <a href="#Education">
            
              <p className="nav-edu"> Education</p>
            </a>
            <a href="#Project">
            
              <p className="nav-edu"> Project </p>
            </a>
            <a href="#Experience">
           
              <p className="nav-edu"> Experience</p>
            </a>
            <a href="#Contact">
             
              <p className="nav-edu">Contact </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
