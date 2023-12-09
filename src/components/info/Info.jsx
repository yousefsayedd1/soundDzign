import React from "react";
import "./info.css";
import { studentIcon, videoIcon, bgElement2 } from "../../assets/index";
const Info = () => {
  return (
    <section id="info" className="info">
      <div className="container">
        <img className="on-corner" src={bgElement2} alt="" />
        <div className="content-container">
          <div className="info-block">
            <img src={studentIcon} alt="" />
            <h3 className="amount">23,000+</h3>
            <p className="type">Student</p>
          </div>
          <div className="info-block">
            <img src={videoIcon} alt="" />
            <h3 className="amount">26 Hrs</h3>
            <p className="type">Video Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
