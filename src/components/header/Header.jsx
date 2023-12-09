import React from "react";
import Navbar from "../navbar/Navbar";
import "./header.css";
const Header = () => {
  return (
    <header>
      <div id="header" className="container">
        <Navbar />
        <div className="course-heading">
          <p>Sound Design Masterclass</p>
          <div className="line"></div>
          <h1>Learn the Art of Sound Design</h1>
          <a href="" className="demo-btn">
            Demo Lesson
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
